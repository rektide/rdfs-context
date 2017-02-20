#!/usr/bin/env node
"use strict"

var
  es6Promisify= require( "es6-promisify"),
  fs= require( "fs")

function rdf(){
	return es6Promisify( fs.readFile)( "./rdf-schema.rdf", "utf8")
}

function rdfParserN3( rdf){
	var
	  id= require( "./@id"),
	  RdfParserN3= require( "rdf-parser-n3"),
	  parser= new RdfParserN3()
	return parser.parse( rdf, null, id).then( parsed=> { return {
		parsed,
		prefixes: parser.rdf.prefixes
	}})
}

function rdfSerializerJsonld( graph){
	//console.log(JSON.stringify(graph.parsed))
	var
	  RdfSerializerJsonld= require( "rdf-serializer-jsonld"),
	  serializer= new RdfSerializerJsonld()
	return serializer.serialize( graph.parsed)
}

function main(){
	var
	  parsed= rdf().then( rdfParserN3),
	  output,
	  prefixes= process.argv.reduce(function(acc, cur, i){
		if( cur=== "--prefixes") return true
		return acc
	  }, false)
	if( prefixes){
		output= parsed.then( parse=> parse.prefixes)
	}else{
		output= parsed.then( rdfSerializerJsonld)
	}
	output
		.then( jsonld=> JSON.stringify( jsonld, null, "\t"))
		.then( console.log)
}

module.exports= {
	rdf,
	rdfParserN3,
	rdfSerializerJsonld,
	main
}
if( require.main=== module){
	main()
}
