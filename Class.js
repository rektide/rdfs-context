module.exports= {
	"@id": "http://www.w3.org/2000/01/rdf-schema#Class",
	"@type": "http://www.w3.org/2000/01/rdf-schema#Class",
	"@context": {
		"Class": {
			"@id": "http://www.w3.org/2000/01/rdf-schema#Class",
			"@type": "@id"
		},
		"subClassOf": require( "./subClassOf")
	}
}
