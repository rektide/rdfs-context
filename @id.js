#!/usr/bin/env node

module.exports= require( "./@id.json")["@id"]

if( require.main=== module){
	console.log(module.exports)
}
