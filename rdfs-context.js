var atId= require( "./@id")
module.exports= {
	"@id": atId,
	"@type": "http://json-ld.org/#context",
	"@context": {
		"rdfs": atId,
		[atId+ "Resource"]: require( "./Resource"),
		[atId+ "Literal"]: require( "./Literal"),
		[atId+ "Class"]: require( "./Class"),
		[atId+ "Datatype"]: require( "./Datatype"),
		[atId+ "Container"]: require( "./Container"),
		[atId+ "ContainerMembershipProperty"]: require( "./ContainerMembershipProperty"),

		[atId+ "subClassOf"]: require( "./subClassOf"),
		[atId+ "subPropertyOf"]: require( "./subPropertyOf"),
		[atId+ "domain"]: require( "./domain"),
		[atId+ "range"]: require( "./range"),
		[atId+ "label"]: require( "./label"),
		[atId+ "comment"]: require( "./comment"),
		[atId+ "member"]: require( "./member"),
		[atId+ "seeAlso"]: require( "./seeAlso"),
		[atId+ "isDefinedBy"]: require( "./isDefinedBy")
	}
}
