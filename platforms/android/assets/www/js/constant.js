///
/// key details
///
var googleAPI = {};
googleAPI = {
	apiKey: 'AIzaSyBDVA-uP2IUHFYftEYyOm8BtQh7zthakAk'
}

////
//// External URL
////
var URLS = {};

URLS = {
	getCountryDetails : "http://api.geonames.org/childrenJSON?geonameId=1269750&username=sinnitesh",
	getCityDetails: "http://api.geonames.org/childrenJSON?geonameId=",
	getBloodBankDetails: "http://data.gov.in/api/datastore/resource.json",
	//getHospitalityDetails: "https://maps.googleapis.com/maps/api/place/textsearch/json?key="+googleAPI.apiKey,
	getHospitalityDetails:"http://data.gov.in/api/datastore/resource.json",
	getLocalJsonforBlodBank:"js/citylist.json",
	getLocalJsonforHospitals:"js/districtsForHospitals.json",


	forceUpgrade: "http://www.interviewgully.com/API/LifeLine/LLUpgrade.json",
	emergencyURL: "http://www.interviewgully.com/API/LifeLine/Emergency.json"
}



///
/// BloodBank Parameters
///
var bloodBankParam = {};
bloodBankParam = {
 res_id :"e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9",
 api_key :"9555f4b13e18327cb4a655f672c4fb37",
 filterColumnName: "state",
 filterColumnName1: "city",
 fields :"state,city,district,h_name,address,pincode,contact,helpline,email,service_time",
 sortcolumnName :"h_name",
 offset:"1",
 no_elements :"100"
}

var hospitalsParam={};
hospitalsParam={
 res_id :"37670b6f-c236-49a7-8cd7-cc2dc610e32d",
 api_key :"9555f4b13e18327cb4a655f672c4fb37",
 filterColumnName: "state",
 filterColumnName1: "district",
 fields :"state,district,Subdistrict,Pincode,Hospital_Name,Location,Telephone,Mobile_Number,Ambulance_Phone_No,Helpline,Hospital_Primary_Email_Id,Hospital_Secondary_Email_Id,Specialties,Facilities,Emergency_Services",
 sortcolumnName :"Hospital_Name",
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