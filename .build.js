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
	rdf()
		.then( rdfParserN3)
		.then( rdfSerializerJsonld)
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
