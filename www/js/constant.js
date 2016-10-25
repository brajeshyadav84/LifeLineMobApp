////
//// External URL
////
var URLS = {};

URLS = {
	getCountryDetails : "http://api.geonames.org/childrenJSON?geonameId=1269750&username=sinnitesh",
	getCityDetails: "http://api.geonames.org/childrenJSON?geonameId=",
	getBloodBankDetails: "http://data.gov.in/api/datastore/resource.json"
}



///
/// BloodBank Parameters
///
var bloodBankParam = {};
bloodBankParam = {
 res_id :"e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9",
 api_key :"9555f4b13e18327cb4a655f672c4fb37",
 filterColumnName :"district",
 fields :"state,city,district,h_name,address,pincode,contact,helpline,email,service_time",
 sortcolumnName :"district",
 offset:"1",
 no_elements :"100"
}


////
////LIfeLIne API Use
////
var SERVER = {
    LIfeLIneUrl: ''
};

var METHODS = {};

METHODS = {
	sendFeedback : '_ah/api/user/v1/send_feedback',
	getReferenceCode : '_ah/api/user/v1/get_referencecode',
}