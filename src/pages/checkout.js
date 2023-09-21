import React, {useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
function Flight_form(){
 
    const navigate = useNavigate(); // Initialize the useHistory hook

    const [formData, setFormData] = useState({
      from: '',
      to: '',
      trip_start_date: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Use history.push to navigate to the next page with query parameters
      navigate(`/Flight_result1?from=${formData.from}&to=${formData.to}&journeyDate=${formData.trip_start_date}`);
    };
  
    
    return (
        <Fragment>
    <div class="body-mains">

<div class="bg-white  header">
<div class="container">
<nav class="navbar navbar-expand-xl navbar-light">
<a class="navbar-brand" href="/">
<img src="https://www.vimaansafar.com/img/vimaansafar_logo.png" alt="VimaanSafar" class="pt-0 pb-0" width="200"/>
</a>
<div class="collapse navbar-collapse " id="navbarText" style="text-align:left">
<div class="breadcrumb_a ml-auto mr-auto flat">
<a href="#" class="active">Search</a>
<a href="#" class="active">Select</a>
<a href="#" class>Payment</a>
<a href="#" class>Confirmation</a>
</div>
</div>



<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

</nav>

</div>
</div>

<form id="page_form" method="POST" action="get_all_data">
<div class="top-bar font-weight-bold"><div class=" " id="clockdiv"></div></div>
<div class="bg-modify pt-3 pb-3">
<div class="container"> <div class="modify-search-xs text-center text-white d-block d-lg-none">
<h3>
<a href="results?tid=65042c28433a0249110f4957" class="text-white"><i class="zmdi zmdi-hc-3x zmdi-chevron-left left-icon  pointer backClass"></i> </a>
DEL <i class="zmdi zmdi-arrow-right text-center show-filter pointer"></i></h3><h3>BOM
</h3>
<span>Fri, 15 Sep | <b>1</b> Traveller | Economy</span>
</div>
<div class="clearfix"></div>
<div class="row d-none d-lg-block modify-search">
<div class="col text-light">
<div class="d-flex">
<div class="pt-1"><i class="zmdi zmdi-airplane"></i></div>
<div class="pt-1 pl-2"><b>New Delhi</b><span class="search-top-display"> (DEL)</span> - <b>Mumbai</b> <span class="search-top-display">(BOM)</span></div>
<div class="pt-1 pl-4"><i class="zmdi zmdi-calendar"></i></div>
<div class="pt-1 pl-2"><span class="search-top-display">Depart on</span> <b>Fri, 15 Sep</b></div>
<div class="pt-1 pl-4"><i class="zmdi zmdi-account-circle"></i></div>
<div class="pt-1 pl-2"><span class="search-top-display"><b>1</b> Traveller, Economy</span></div>
<div class="ml-auto "><a href="results?tid=65042c28433a0249110f4957" class="btn btn-danger btn-sm bgshade-2 "><i class="zmdi zmdi-chevron-left "></i> Go Back</a></div>
</div>
</div>
</div>
<div class="row">
<div class="clearfix"></div>
<div class="col">
<hr class />
</div>
</div></div>
</div>
<div class="container mt-3">

<div id="preloader_setup" class="fadeIn animated">
<div class="row">
<div class="col-12 col-lg-9">

<div id="flight_nav">
<div class="row">
<div class="col">
<div class="alert alert-success font-weight-bold">
<div class="d-flex keel-mom">
<div class="pt-1"><i class="zmdi zmdi-thumb-up zmdi-hc-2x text-primary"></i></div>
<div class="pl-2 pt-2 d-none d-sm-block">You got the best price available!</div>
<div class="ml-auto text-right" style="width:100px;"><small>Final Price</small><br/><span class="float-right final_pay_amt"></span></div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col">
<div class="h5 mt-0 text-light"><i class="zmdi zmdi-flight-takeoff"></i> Review Flight Details</div>
</div>
</div>
<div class="bg-light mt-2 mb-3 bg-white pt-2 pb-2  rounded shadow" style="overflow:hidden">
<div class="row ">
<div class="col-12 mb-1 font-weight-bold">
<div class="p-2">
<div class="row p-2 ml-2 mr-2" style="background-color: #eee; color: #000;">
<div class="col-2 col-md-1  arp fli_go_head viewHead font-weight-bold">
<i class="zmdi zmdi-flight-takeoff zmdi-hc-2x"></i>
</div>
<div class="col-3 col-md-3 arp fli_go_head viewHead p-1">
DEL-BOM </div>
<div class="col-4 col-md-5 arp fli_go_head viewHead p-1" style="text-transform: inherit!important;">
<b><i class="zmdi zmdi-alarm zmdi-hc-1x"></i> 13h 20m</b>
</div>
<div class="col-3 col-md-3 arp fli_go_head viewHead p-1">
<div class="m-0 text-right" style="font-size:11px;"><div class="category cat-news"> Regular <span class="d-none d-sm-inline">Deal</span></div></div> </div>
</div>
</div>
</div>
</div>
<div class="mb-1 fadeInDown  animated">
<div class="row detail-box m-2">
<div class="col-12">
<ul class="nav nav-tabs" data-persist="true">
<li class="nav-item">
<a class="nav-link font-weight-normal active" data-toggle="tab" aria-controls="profile" aria-selected="false" href="#FlightInfo-65042c2d924d41c65f07d2a30">Flight</a>
</li>
<li class="nav-item">
<a class="nav-link font-weight-normal" data-toggle="tab" aria-controls="profile" aria-selected="false" href="#BaggageInfo-65042c2d924d41c65f07d2a30">Baggage</a>
</li>
<li class="nav-item">
<a class="nav-link font-weight-normal" data-toggle="tab" aria-controls="profile" aria-selected="false" href="#FareInfo-65042c2d924d41c65f07d2a30">Fare</a>
</li>
<li class="nav-item">
<a class="nav-link font-weight-normal" id="profile-tab" data-toggle="tab" href="#Cancellation-65042c2d924d41c65f07d2a30" role="tab" aria-controls="profile" aria-selected="false">Cancellation</a>
</li>

</ul>
<div class="tab-content">
<div id="FlightInfo-65042c2d924d41c65f07d2a30" class="container tab-pane active detailTabs"><br/>
<div class="col-12 bg-white pl-0 pr-0">
<div class="pt-1">
<div class="row keel-mom no-gutters">
<div class="col-2 col-sm-2">
<img src="img/air/AI.png" class="al" width="25" height="25"/>
<div class="text-muted">Air India</div>
<div class="text-muted small">AI - 829</div>
</div>
<div class="col-3 col-sm-3 text-right ">
<span class>New Delhi (DEL) </span>
<div><h5 class="font-weight-bold mb-0">20:50 </h5></div>
<div class="text-muted">Fri, Sep 15</div>
<div class="text-muted  d-none d-lg-block textOverflow small" title="Indira Gandhi International Airport">
Indira Gandhi International Airport
</div>
<div class="text-muted textOverflow small" title="Terminal: 2">Terminal: 2</div>
</div>
<div class="col-4 col-sm-4 ">
<div class="Flights-Results-LegInfo">
<div class="col-field stops ml-auto mr-auto pl-2">
<div class="duration">03h 25m </div>
<div class="top">
<div id="XGWA-info-leg-0-stops" class="Flights-Results-StopsPlot circle">
<span class="axis"></span>
</div>
</div>
<div class="bottom">
Economy </div>
</div>
</div>
</div>
<div class="col-3 col-sm-3 ">
<span class>Trivandrum (TRV) </span>
<div><h5 class="font-weight-bold mb-0">00:15 </h5></div>
<div class="text-muted">Sat, Sep 16</div>
<div class="text-muted  d-none d-lg-block textOverflow small" title="Trivandrum International Airport" style>Trivandrum International Airport</div>
<div class="text-muted textOverflow small" title="Terminal: 3">Terminal: 3</div>
</div>

</div>
</div>
<div class="p-2">
<div class="row">
<div class="col-3 d-none d-sm-block ">
</div>
<div class="col-12 col-sm-12">
<hr class="m-0 mb-2"/>
<div class="row">
<div class="col-9 text-muted">Change planes in Trivandrum (TRV)</div>
<div class="col-3  text-right font-weight-bold">07h 45m</div>
</div>
<hr class="m-0 mt-2"/>
</div>
</div>
</div>
<div class="pt-1">
<div class="row keel-mom no-gutters">
<div class="col-2 col-sm-2">
<img src="img/air/AI.png" class="al" width="25" height="25"/>
<div class="text-muted">Air India</div>
<div class="text-muted small">AI - 658</div>
</div>
<div class="col-3 col-sm-3 text-right ">
<span class>Trivandrum (TRV) </span>
<div><h5 class="font-weight-bold mb-0">08:00 </h5></div>
<div class="text-muted">Sat, Sep 16</div>
<div class="text-muted  d-none d-lg-block textOverflow small" title="Trivandrum International Airport">
Trivandrum International Airport
</div>
<div class="text-muted textOverflow small" title="Terminal: 2">Terminal: 2</div>
</div>
<div class="col-4 col-sm-4 ">
<div class="Flights-Results-LegInfo">
<div class="col-field stops ml-auto mr-auto pl-2">
<div class="duration">02h 10m </div>
<div class="top">
<div id="XGWA-info-leg-0-stops" class="Flights-Results-StopsPlot circle">
<span class="axis"></span>
</div>
</div>
<div class="bottom">
Economy </div>
</div>
</div>
</div>
<div class="col-3 col-sm-3 ">
<span class>Mumbai (BOM) </span>
<div><h5 class="font-weight-bold mb-0">10:10 </h5></div>
<div class="text-muted">Sat, Sep 16</div>
<div class="text-muted  d-none d-lg-block textOverflow small" title="Chhatrapati Shivaji International Airport" style>Chhatrapati Shivaji International Airport</div>
<div class="text-muted textOverflow small" title="Terminal: 2">Terminal: 2</div>
</div>

</div>
</div>
</div>
</div>
<div id="BaggageInfo-65042c2d924d41c65f07d2a30" class="container tab-pane fade detailTabs"><br/>
<div class="col-12 bg-white pl-0 pr-0">
<div class="p-2">
<div class="row">
<div class="col-12 ">
<table class="table">
<thead>
<tr>
<td scope="col">Airline</td>
<td scope="col">Check-in Baggage</td>
<td scope="col">Cabin Baggage</td>
</tr>
</thead>
<tbody>
<tr>
<td><img src="img/air/AI.png" class="al" width="25" height="25"/>
<div class="small">AI-829</div>
</td>
<td class="pt-3">20 Kgs</td>
<td>8 Kgs</td>
</tr>
<tr>
<td><img src="img/air/AI.png" class="al" width="25" height="25"/>
<div class="small">AI-658</div>
</td>
<td class="pt-3">20 Kgs</td>
<td>8 Kgs</td>
</tr>
</tbody>
</table>
<p class="text-muted smallFont">The baggage information is just for reference. Please Check with airline before check-in. For more information, visit Air India Website.</p>
</div>

</div>
</div>
</div>
</div>
<div id="FareInfo-65042c2d924d41c65f07d2a30" class="container tab-pane fade detailTabs"><br>
<div class="col-12 bg-white pl-0 pr-0">
<div class="p-2">
<div class="row">
<div class="col-12 ">
<table class="table table-bordered">
<thead>
<tr>
<td scope="col">Traveller</td>
<td scope="col" class="text-right">Base Fare</td>
<td scope="col" class="text-right">Taxes</td>
<td scope="col" class="text-right">Total Fare</td>
</tr>
</thead>
<tbody>
<tr>
<td>1 Adult </td>
<td class="text-right">&#8377;10804</td>
<td class="text-right">&#8377;2070</td>
<td class="text-right">&#8377;12874</td>
</tr>
<tr>
<th colspan="3">Total</th>
<th class="text-right">&#8377;12874</th>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
<div class="tab-pane fade detailTabs" id="Cancellation-65042c2d924d41c65f07d2a30" role="tabpanel" aria-labelledby="profile-tab">
<div class="col-12 bg-white pl-0 pr-0">
<div class="p-2">
<div class="row">
<div class="col-6">
<div class=" p-1 text-left ">
</div>
</div>
<div class="col-6 text-right ">
<div class="p-1 badge badge-danger ">
Non-Refundable</div>
</div>
</div>
<div class="row">
<div class="col-12 col-sm-6 ">
<div class="bold m-2"><b>Cancellation Charges</b></div>
<table class="table table-bordered">
<thead>
<tr>
<td>Before 4 hours Departure</td>
<td>As per airlines policy</td>
</tr>
</thead>
<tbody>
<tr>
<td>Agency Fee</td>
<td>&#8377;500</td>
</tr>
</tbody>
</table>
</div>
<div class="col-12 col-sm-6">
<div class="m-2"><b>Reschedule Charges</b></div>
<table class="table table-bordered">
<thead>
<tr>
<td>Before 4 hours Departure</td>
<td>As per airlines policy</td>
</tr>
</thead>
<tbody>
<tr>
<td>Agency Fee</td>
<td>&#8377;500</td>
</tr>
</tbody>
</table>
</div>
<div class="pl-3 pr-3">
<p><b>Terms & Conditions</b></p>
<ul class="smallFont">
<li>The charges will be on per passenger per sector</li>
<li>Rescheduling Charges = Rescheduling/Change Penalty + Fare Difference (if applicable)</li>
<li>Partial cancellation is not allowed on the flight tickets which are book under special discounted fares</li>
<li>In case, the customer have not cancelled the ticket within the stipulated time or no show then only statutory taxes are refundable from the respective airlines
For infants there is no baggage allowance</li>
<li>In certain situations of restricted cases, no amendments and cancellation is allowed</li>
<li>Penalty from airlines needs to be reconfirmed before any cancellation or amendments</li>
<li>Penalty changes in airline are indicative and can be changed without any prior notice</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div style="clear: both;"></div>
<input type="hidden" name="call" value="booking"/>
<input type="hidden" name="tid" value="65042c28433a0249110f4957"/>
<input type="hidden" name="sid" value/>
<input type="hidden" name="fid" value/>
<input type="hidden" name="did" value="65042c28433a0249110f4957_d_981"/>
<input type="hidden" name="rid" value/>
<input type="hidden" name="flight_pax_total" value="12874"/>
<input type="hidden" name="total_charge_to_customer" value/>
<input type="hidden" name="con_fee" value="299"/>
<input type="hidden" name="paxcount" value="1"/>
<input type="hidden" name="cou_code" value/>
<input type="hidden" name="cou_amt" value/>
<input type="hidden" name="cou_amt_dis" value="0"/>
<input type="hidden" name="wego_click_id" value/>

</div>
</div>
<input type="hidden" name="addons_insurance" value="249"/>
<input type="hidden" name="insurance_days" value="0"/>
<div class="row">
<div class="col">
<div class="h5 mt-3 text-light"><i class="zmdi zmdi-shield-check"></i> Travel Insurance</div>
</div>
</div>
<div class="bg-light mb-3 bg-white shadow rounded mt-1 p-3" style="overflow:hidden">
<div class="row">
<div class="d-md-none text-center col-12 mb-2"> <img src="img/ins/insurance_logo_acko.png" width="180"/></div>
<div class="col-12">
<div class="form-check ">
<div class="d-flex flex-row ">
<div class="d-none mr-auto d-md-block "> <img src="img/ins/insurance_logo_acko.png" width="180"/></div>
<div class="pt-0 font-weight-bold h6 mb-0 ">&#8377;249 <br/><small class="text-muted">per person </small> <span class="text-right mb-2" id="insurance_indi"><span class="badge badge-danger">NOT SECURED</span></span>&nbsp;&nbsp;&nbsp; </div>
<div class="text-right insuleft"><label class="switch mb-0">
<input type="checkbox" name="buy_insurance" value="y"/>
<span class="slider round"></span>
</label>
</div>
</div>
</div>
</div>

<div class="col-12 font-weight"><div class="p-2 mt-2 bg-light" style="border-radius:10px !important;background-color: #e8fff5!important;"><span class="text-success" style>43% of our flyers secure their trip with Acko.</span> Its cover include: <span class="float-right"><a href="ackoTnC.pdf" target="_blank"> View Policy Coverage</a></span></div> </div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover1" style>
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/accident.png" height="45" class/><br/>
<span class="small font-weight-bold">Accidental Death <br/> <span class="text-muted">INR 5,00,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover2" style>
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/missed_carrier.png" height="45" class/><br/>
<span class="small font-weight-bold">Missed Carrier <br/> <span class="text-muted">INR 2000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover3" style>
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/trip_delay.png" height="45" class/><br/>
<span class="small font-weight-bold">Trip Delay <br/> <span class="text-muted">INR 1000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover4" style>
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/hospitalization.png" height="45" class/><br/>
<span class="small font-weight-bold">Hospitalization Cover <br/> <span class="text-muted">INR 1,00,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover5" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/repatriation_2.png" height="45" class/><br/>
<span class="small font-weight-bold">Repatriation <br/> <span class="text-muted">INR 1,00,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover6" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/missed_carrier.png" height="45" class/><br/>
<span class="small font-weight-bold">Missed Connection <br/> <span class="text-muted">INR 10,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover7" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/baggage_loss.png" height="45" class/><br/>
<span class="small font-weight-bold">Baggage Loss <br/> <span class="text-muted">INR 20,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover8" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/baggage_delay.png" height="45" class/><br/>
<span class="small font-weight-bold">Baggage Delay <br/> <span class="text-muted">INR 5,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover9" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/trip_cancellation.png" height="45" class/><br/>
<span class="small font-weight-bold">Trip Cancellation & Interruption <br/> <span class="text-muted">INR 20,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover10" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/accident.png" height="45" class/><br/>
<span class="small font-weight-bold">Accidental Medical <br/> <span class="text-muted">INR 1,00,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover11" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/medical.jpeg" height="45" class/><br/>
<span class="small font-weight-bold">Evacuation Medical <br/> <span class="text-muted">INR 1,00,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover12" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/hotel.jpeg" height="45" class/><br/>
<span class="small font-weight-bold">Personal Liability <br/> <span class="text-muted">INR 2,00,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover13" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/trip_delay.png" height="45" class/><br/>
<span class="small font-weight-bold">Compassionate Visit <br/> <span class="text-muted">INR 30,000</span></span>
</div>
</div>
<div class="col-6 col-md-3 text-center text-primary  mt-3 insuCover14" style="display:none">
<div class="bg-light p-3 mb-1  rounded" style="border-radius:10px !important; background-color:#f2f6ff!important">
<img src="img/ins/hotel.jpeg" height="45" class/><br/>
<span class="small font-weight-bold">Emergency Hotel Requirement <br/> <span class="text-muted">INR 20,000</span></span>
</div>
</div>
<div class="col-12 col-md-12 text-center mt-3 insuMore" onclick="$('.insuCover4').show();$('.insuCover5').show();$('.insuCover6').show();$('.insuCover7').show();$('.insuCover8').show();$('.insuCover9').show();$('.insuCover10').show();$('.insuCover11').show();$('.insuCover12').show();$('.insuCover13').show();$('.insuCover14').show();$('.insuLess').show();$('.insuMore').hide();">
<div class="p-2" style="border-radius:10px !important; background-color:#f2f6ff!important">
<div><h6 class="font-weight-bold text-primary" style="text-decoration:underline;cursor:pointer;">Show All Benifits (+10)</h3></div>
</div>
</div>
<div class="col-12 col-md-12 text-center mt-3 insuLess" style="display:none;" onclick="$('.insuCover5').hide();$('.insuCover6').hide();$('.insuCover7').hide();$('.insuCover8').hide();$('.insuCover9').hide();$('.insuCover10').hide();$('.insuCover11').hide();$('.insuCover12').hide();$('.insuCover13').hide();$('.insuCover14').hide();$('.insuLess').hide();$('.insuMore').show();">
<div>
<div class="p-2" style="border-radius:10px !important; background-color:#f2f6ff!important"><h6 class="font-weight-bold text-primary" style="text-decoration:underline;cursor:pointer;">Show Less</h6></div>
</div>
</div>


</div>
</div>
<div class="modal fade" id="InsuModal" tabindex="-1" role="dialog" aria-labelledby="supportModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content" style="width: 550px;">
<div class="modal-header text-primary"><h5><i class="zmdi zmdi-shield-check"></i> Travel Assistance & Insurance</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body text-left">
<table class="table table-bordered">
<thead>
<tr>
<th colspan="2" scope="col">INSURANCE BENEFITS</th>
</tr>
</thead>
<tbody>
<tr><td>Personal Accidental (Death+PTD+PPD)</td><td>&#8377;5,00,000</td></tr>
<tr> <td>Emergency Accidental Hospitalisation including Emergency Medical Evacuation</td><td>&#8377;1,50,000</td></tr>
<tr><td>Repatriation of Mortal Remains)</td><td>&#8377;50,000</td></tr>
<tr><td>Personal Liability</td><td>&#8377;75,000</td></tr>
<tr><td>Total Loss of Checked-In Baggage</td><td>&#8377;10,000</td></tr>
<tr><td>Delay of Checked-in Baggage</td><td>&#8377;3,000</td></tr>
<tr><td>Missed Connection</td><td>&#8377;7,500</td></tr>
<tr><td>Loss of Deposit or Cancellation (Hotel and Air)</td><td>&#8377;10,000</td></tr>
<tr><td>Trip Delay</td><td>&#8377;5,500</td></tr>
<tr><td>Compassionate Visit</td><td>&#8377;8,500</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<div class="row" id="coupon_row">
<div class="col">
<div class="h5 mt-3 text-light"><i class="zmdi zmdi-receipt"></i> Have Coupon?</div>
</div>
</div>
<div class="card border-0 mt-2 shadow rounded">
<div class="row">
<div class="col-12 col-md-6">
<div class="text-center">
<img src="img/Gift-rafiki.png" style="max-width:250px;" class="img-fluid"/>
</div>
</div>
<div class="col-12 col-md-6 ml-auto mr-auto">
<div class="card-group-item">
<div class="filter-content">
<div class="card-body p-0 pt-4 pb-2" id="coupon_code_box">
<div class="input-group p-3">
<input type="text" name="input_coupon_code" class="form-control text-uppercase" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2"/>
<div class="input-group-append">
<button class="btn btn-primary " type="button" id="button-addon2" onclick="add_coupon(&quot;b&quot;)">Apply</button>
</div>
</div>
<div class="p-3 pt-0">
<ul class="list-group">
<li class="list-group-item">
<div class="custom-control custom-radio custom-control-inline">
<input type="radio" id="coupon1" name="coupon_code_listed" class="custom-control-input" onclick="apply_coupon('100OFF')"/>
<label class="custom-control-label" for="coupon1">&#8377;100 INSTANT OFF <span class="badge badge-primary  p-2">100OFF</span></label>
</div>
</li>
<li class="list-group-item">
<div class="custom-control custom-radio custom-control-inline">
<input type="radio" id="coupon2" name="coupon_code_listed" class="custom-control-input " onclick="apply_coupon('TODSALE')">
<label class="custom-control-label" for="coupon2">SAVE UP TO &#8377;5000 OFF <span class="badge badge-primary  p-2">TODSALE</span></label>
</li>

<li class="list-group-item">
<div class="custom-control custom-radio custom-control-inline">
<input type="radio" id="coupon4" name="coupon_code_listed" class="custom-control-input" onclick="apply_coupon('FLYDAY')">
<label class="custom-control-label" for="coupon3">SALE UPTO &#8377;5000 <span class="badge badge-primary p-2">FLYDAY</span></label>
</li>
</div>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col">
<div class="h5 mt-3 text-light"><i class="zmdi zmdi-receipt"></i> Price Details</div>
</div>
</div>
<div class="card border-0 mt-2 shadow rounded">
<div class="row">
<div class="col col-md-12 ml-auto mr-auto">
<article class="card-group-item">
<div class="filter-content">
<div class="card-body p-0 pt-2 pb-2">
<div class=" pt-2 pb-2 small alert alert-success mr-2 ml-2" role="alert">
<i class="zmdi zmdi-alert-circle"></i> This fare is already discounted of &#8377;841 per passenger.
</div>
<div class="pl-3 pr-3 pt-2"><a href="javascript:void(0)" class="text-dark" onclick="$('.baserow').toggle();">Base Fare <span class="text-muted">(1 Passenger) <i class="zmdi zmdi-chevron-down"></i></span> <span class="float-right">&#8377;10804</span></a></div>
<div class="pl-5 pr-3 baserow text-muted" style="display: none;">Adult x 1 <span class="float-right">&#8377;10804</span></div>
<div class="pl-3 pr-3 pt-2"><a href="javascript:void(0)" class="text-dark" onclick="$('.taxrow').toggle();">Taxes <span class="text-muted">(1 Passenger) <i class="zmdi zmdi-chevron-down"></i></span> <span class="float-right">&#8377;2070</span></a></div>
<div class="pl-5 pr-3 taxrow text-muted" style="display: none;">Adult x 1 <span class="float-right">&#8377;2070</span></div>
<hr class="mb-0 mt-2"/>
<div class="pl-3 pr-3 pt-3 pb-0 font-weight-bold">Total Fare <span class="float-right">&#8377;12874</span></div>
<div class="addonshow">
</div>
<div class="h5 pl-3 pr-3 pt-2 pb-2 mt-3 mb-2 text-primary font-weight-bold" style="background: #eee;">You Pay <span class="font-weight-normal pl-1  btn badge btn-success" style="font-size:12px;"><i class="zmdi zmdi-check"></i> ALL INCLUSIVE</span> <span class="float-right final_pay_amt">&#8377;12874</span></div>
<div class="p-2 text-center"><img src="img/Low-Price-Guarantee-Offer.gif" width="90"/></div>
</div>
</div>
</article>
</div>
</div>
</div>
<div class="row">
<div class="col">
<div class="h5 mt-3 text-light"><i class="zmdi zmdi-account-circle"></i> Contact Details <small></small></div>
</div>
</div>
<div class="bg-light mb-3 bg-white shadow rounded mt-1 p-3" style="overflow:hidden">
<div class="row mt-2">
<div class="col-12 col-md-6">
<fieldset class="formRow">
<div class="formRow--item">
<label for="email" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="email" id="email" class="formRow--input js-input required email" value autocomplete="off" placeholder="Email"/>
</label>
</div>
</fieldset>
</div>
<div class="col-4 col-md-2">
<fieldset class="formRow">
<div class="formRow--item">
<label for="code" class="formRow--input-wrapper  active">
<select class="custom-select formRow--input required" name="code" style="padding:10px 20px; height:50px;">
<option value>Code</option>
<option selected="selected" value="+91">+91</option>
</select>
<span class="placeholder">Code</span>
</label>
</div>
</fieldset>
</div>
<div class="col-8 col-md-4">
<fieldset class="formRow">
<div class="formRow--item">
<label for="phone" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="phone" id="phone" class="formRow--input js-input required" value autocomplete="off" placeholder="Phone" maxlength="15"/>
</label>
</div>
</fieldset>
</div>
</div>
<div class="row mt-0">
<div class="col">
<small class="text-muted"><i class="zmdi zmdi-info-outline"></i> Your booking details will be sent to this email address and mobile number.</small>
</div>
</div>
</div>
<div class="row">
<div class="col">
<div class="h5 mt-3 text-light"><i class="zmdi zmdi-account-circle"></i> Enter Traveller Details <small></small></div>
</div>
</div>
<div class="bg-light mb-3 bg-white shadow rounded mt-1 p-3" style="overflow:hidden">
<div class="row">
<div class="col">
<div class="h6 mt-3 pl-1 pr-3"> <b>Adult 1</b></div>
</div>
</div>
<div class="row mt-2">
<div class="col-12 col-sm-3 mb-2">
<fieldset class="formRow">
<div class="formRow--item">
<label for="title_ADT1" class="formRow--input-wrapper  active">
<select class="custom-select formRow--input required" name="form[passenger][ADT][0][title]" id="title_ADT1" style="padding:10px 20px; height:50px;">
<option value>Title</option>
<option value="Mr">Mr</option>
<option value="Mrs">Mrs</option>
<option value="Ms">Ms</option>

</select>
<span class="placeholder">Title</span>
</label>
</div>
</fieldset>
</div>
<div class="col-12 col-sm-3 mb-2">
<fieldset class="formRow">
<div class="formRow--item">
<label for="firstname_ADT1" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="form[passenger][ADT][0][firstname]" id="firstname_ADT1" class="formRow--input js-input ucwords required" value autocomplete="off" placeholder="First Name" minlength="2"/>
</label>
</div>
</fieldset>
</div>
<div class="col-12 col-sm-3 mb-2 d-none">
<fieldset class="formRow">
<div class="formRow--item">
<label for="middlename_ADT1" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="form[passenger][ADT][0][middlename]" id="middlename_ADT1" class="formRow--input ucwords js-input " value autocomplete="off" placeholder="Middle Name"/>
</label>
</div>
</fieldset>
</div>
<div class="col-12 col-sm-3 mb-2">
<fieldset class="formRow">
<div class="formRow--item">
<label for="lastname_ADT1" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="form[passenger][ADT][0][lastname]" id="lastname_ADT1" class="formRow--input ucwords js-input " value autocomplete="off" placeholder="Last Name" minlength="1"/>
</label>
</div>
</fieldset>
</div>
<div class="col-12 col-sm-3 mb-2">
<fieldset class="formRow">
<div class="formRow--item">
<label for="dob_ADT1" class="formRow--input-wrapper js-inputWrapper  active">
<input type="text" readonly name="form[passenger][ADT][0][dob]" id="dob_ADT1" class="formRow--input js-input dob required indiaDate" autocomplete="off" placeholder="Birth Date"/>
</label>
</div>
</fieldset>
</div>
<div class="col-12 col-sm-12 mb-2 text-right mt-3">
<a href="javascript:void(0);" id="addReq1" onclick="$('#FreqFlyr1').show();$('#romReq1').show();$('#addReq1').hide();">[+] Additional requests (optional)</a>
<a href="javascript:void(0);" id="romReq1" onclick="$('#FreqFlyr1').hide();$('#romReq1').hide();$('#addReq1').show();" style="display: none;">[-] Additional requests (optional)</a>
</div>
</div>
<div class="row mb-3" id="FreqFlyr1" style="display: none;">
<div class="col-12 col-sm-5 col-md-5 mt-sm-4 ">
<fieldset class="formRow">
<div class="formRow--item">
<label for="mealReq_ADT1" class="formRow--input-wrapper  active">
<select class="custom-select formRow--input " name="form[mealRequest][ADT][0][mealReq]" id="mealReq_ADT1" style="padding:10px 20px; height:50px;">
<option value>Select Meal Preference</option>
<option value="Vegetarian Hindu Meal">Vegetarian Hindu Meal</option>
<option value="Baby Meal">Baby Meal</option>
<option value="Hindu ( Non Vegetarian) Meal">Hindu ( Non Vegetarian) Meal </option>
<option value="Kosher Meal">Kosher Meal</option>
<option value="Moslem Meal">Moslem Meal</option>
<option value="Vegetarian Jain Meal">Vegetarian Jain Meal</option>
</select>
<span class="placeholder">Meal Preference</span>
</label>
</div>
</fieldset>
</div>
<div class="col-12 col-sm-7 col-md-7 mt-sm-4 mb-2">

<fieldset class="formRow">
<div class="input-group-prepend mb-3">
<span class="input-group-text md-addon" id="inputGroupMaterial-sizing-default" style="font-size: 12px;">
<img src="img/air/AI.png" class="al" width="25" height="25">&nbsp;&nbsp;
Flying Returns</span>
<label for="feqAirineADT1" class="formRow--input-wrapper js-inputWrapper" style="margin-bottom: 0px!Important;">
<input type="text" name="form[addition][ADT][0][feqFlyNo][AI-Flying Returns]" id="feqFlyNoADT1" class="formRow--input  js-input " value autocomplete="off" placeholder="Frequent Flyer Number" minlength="2">
</label>
</div>
</fieldset>
</div>
</div>
</div>
<div class="row">
<div class="col">
<div class="alert bg-success text-light " style="border:solid 1px #FFF">
<div class="d-flex keel-mom">
<div class="pt-1"><i class="zmdi zmdi-badge-check zmdi-hc-2x"></i></div>
<div class="pl-2 pt-0">TOTAL TICKET AMOUNT<br><span class="small">for all passengers</span></div>
<div class="ml-auto text-right" style="width:100px;"><small>You Pay</small><br><span class="float-right final_pay_amt font-weight-bold mb-0 h5"></span></div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-12 p-3 text-center">
<button type="submit" class="btn btn-danger btn-lg bgshade-2" id="pay_submit"><b class="font-weight-bold h5">Proceed to Payment <i class="zmdi zmdi-chevron-right "></i></b> </button>
</div>
<div class="col-12 text-center" id="term_box">
<span class="text-light" style="font-size:13px; line-height: 10px;">
By selecting pay now, I agree to the Booking <a href="https://www.vimaansafar.com/company/terms-and-conditions" target="_blank" class="text-light"><u>Terms and Conditions</u></a> and <a href="https://www.vimaansafar.com/company/privacy-policy" target="_blank" class="text-light"><u>Privacy Policy</u></a>
<br><br><br>
</div>
</div>
</div>
<div class="col-3  d-none d-lg-block">
<div id="getFixed">
<div class="row">
<div class="col">
<div class="h5 mt-3 text-light"><i class="zmdi zmdi-receipt"></i> Price Details</div>
</div>
</div>
<div class="card border-0 mt-2 rounded shadow">
<article class="card-group-item">
<div class="filter-content">
<div class="card-body p-0 pt-2 pb-2">
<div class=" pt-2 pb-2 small alert alert-success m-2" role="alert">
<i class="zmdi zmdi-alert-circle"></i> This fare is already discounted of &#8377;841 per passenger.
</div>
<div class="pl-3 pr-3 pt-2"><a href="javascript:void(0)" class="text-dark" onclick="$('.baserow').toggle();">Base Fare <span class="text-muted">(1 Passenger) <i class="zmdi zmdi-chevron-down"></i></span> <span class="float-right">&#8377;10804</span></a></div>
<div class="pl-5 pr-3 baserow text-muted" style="display: none;">Adult x 1 <span class="float-right">&#8377;10804</span></div>
<div class="pl-3 pr-3 pt-2"><a href="javascript:void(0)" class="text-dark" onclick="$('.taxrow').toggle();">Taxes <span class="text-muted">(1 Passenger) <i class="zmdi zmdi-chevron-down"></i></span> <span class="float-right">&#8377;2070</span></a></div>
<div class="pl-5 pr-3 taxrow text-muted" style="display: none;">Adult x 1 <span class="float-right">&#8377;2070</span></div>
<hr class="mb-0 mt-2">
<div class="pl-3 pr-3 pt-3 pb-0 font-weight-bold">Total Fare <span class="float-right">&#8377;12874</span></div>
<div class="addonshow">
</div>
<div class="h5 pl-3 pr-3 pt-2 pb-2 mt-3 mb-2 text-primary font-weight-bold" style="background: #eee;">You Pay <span class="float-right final_pay_amt">&#8377;12874</span></div>
<div class="p-2 text-center"><img src="img/Low-Price-Guarantee-Offer.gif" width="90"></div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</div>
</form>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title" id="myModalLabel"><i class="zmdi zmdi-alarm-check"></i> Please Wait</h4>
</div>
<div class="modal-body center-block">
<div class="progress mt-2" style="height:25px;">
<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
</div>
<div class="p-2 pt-2 pb-4 small text-danger text-center">
Please do not refresh or close this window.
</div>
</div>
</div>
</div>
</div>
<div class="modal fade protact_rec" id="protact_rec" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header" style="padding: 5px;" onclick="$('.protact_rec').modal('hide');">
<div class=" ml-auto mr-auto">
<h4 class="modal-title" id="myModalLabel"><i class="zmdi zmdi zmdi-hc-2x zmdi-close-circle"></i></h4>
</div>
</div>
<div class="modal-body center-block">
<div class="p-2  pb-2   text-center">
<h6 class="font-weight-bold mt-0 mb-0">You selected Non-Refundable Booking!</h6>
<h6 class="font-weight-bold mb-3">Are you sure?</h6>
<div class="mt-2 mb-2 text-left small">
By selecting "Non-Refundable" the basic refund terms of sale will apply which means <b>you may not be eligible for a refund under any condition</b>. We would <b>highly recommend selecting a refundable booking</b> in case any of hese risk prevent you from attending your booking.
</div>
<div class="mt-2 mb-2 text-left  small">
Please reconsider so we can give you the best service so you do not lose &#8377; 12774 entirely.
</div>
<div class="mt-2 mb-2">

<button type="submit" class="btn btn-danger btn-lg bgshade-2" id="pay_submit" onclick="recon_refund()"><b class="font-weight-bold h5">Reconsider <i class="zmdi zmdi-chevron-right "></i></b> </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div id="footerCopy" class>
<div class="container ">
<div class="row">
<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-12 text-center"><br/>
<img src="/img/footer-trustlogo_new_f.png?trve" class="img-fluid d-none d-md-inline" style="max-width: 700px;"/>
<img src="/img/footer-trustlogo_new_f.png?trve" class="img-fluid d-inline d-md-none"/>
</div>
<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-12 text-center"><br/>
<img src="/img/footer_card_icons.png?trve" class="img-fluid d-none d-md-inline" style="max-width: 700px;"/>
<img src="/img/footer_card_icons_m.png?trv" class="img-fluid d-inline d-md-none"/>
</div>
<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-12 text-center">
<br/>
<p class="copyright small">&copy; 2023 Travelsees. All Rights Reserved.</p>
</div>
<hr/>
</div>
</div>
</div>
</section>

</div>

</form>

<div class="modal border-0 fadeInDown animated  " id="edit_form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static" data-keyboard="false" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content border-0 shadow-lg">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Edit Search</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">

<div id="flight_form" style="display:none;">
<form name="Search_Flights" id="Search_Flights" action="https://www.vimaansafar.com/search" method="GET">

<div class="row">
<div class="col-12 mb-2 mt-2 text-left">
<div class="form-check form-check-inline">
<label class="form-check-label btn-outline-secondary btn btn-sm" style="width:120px;" for="returnDateRequiredYes">
<input class="form-check-input" type="radio" name="return_date_new" style="position:relative;top:2px;" id="returnDateRequiredYes" value="y">
Round Trip</label>
</div>
<div class="form-check form-check-inline">
<label class="form-check-label btn-outline-secondary btn btn-sm" style="width:120px;" for="returnDateRequiredNo">
<input class="form-check-input" type="radio" name="return_date_new" style="position:relative;top:2px;" id="returnDateRequiredNo" value="n" checked>
One Way</label>
</div>
</div>
</div>

<div class="row">
<div class="col">
<div id="form_error"></div>
</div>
</div>
<div class="row">

<div class="col-6 col-lg-6 mt-2 d-block d-sm-none bg-l" onclick="originModal()">
<fieldset class="formRow">
<div class="formRow--item">
<label for="board_id" class="formRow--input-wrapper  active">
<div class="formRow--input " style="padding:0 !important; margin:0 !important;"><div class id="origin_pl_mob" style="font-size:23px;text-align:center; padding:20px; padding-left:30px; font-weight:bold;">DEL</div></div>
<span class="placeholder">FROM</span>
<i class="zmdi zmdi-flight-takeoff zmdi-hc-2x icf mt-2"></i>
</label>
</div>
</fieldset>
</div>
<div class="col-6 col-lg-6 mt-2 d-block d-sm-none bg-l" onclick="destinationModal()">
<fieldset class="formRow">
<div class="formRow--item">
<label for="board_id" class="formRow--input-wrapper  active">
<div class="formRow--input" style="padding:0 !important; margin:0 !important;">
<div class id="destination_pl_mob" style="font-size:23px;text-align:center; padding:20px;  padding-left:30px; font-weight:bold;">BOM</div>
</div>
<span class="placeholder">TO</span>
<i class="zmdi zmdi-flight-land zmdi-hc-2x icf  mt-2"></i>
</label>
</div>
</fieldset>
</div>

<div class="col-12 col-lg-12 mt-2 d-none d-sm-block" class>
<fieldset class="formRow">
<div class="formRow--item">
<label for="origin" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="origin" id="origin" class="formRow--input js-input addclearbutton" value="New Delhi (DEL)" autocomplete="off" placeholder="From" onClick="this.select();">
<i class="zmdi zmdi-flight-takeoff zmdi-hc-2x icf"></i>
<input name="origin_airport" id="origin_airport" type="hidden" value="DEL">
</label>
</div>
</fieldset>
</div>
<div class="d-none d-sm-block"><i id="swapAirport" class="zmdi zmdi-hc-3x zmdi-swap-vertical-circle swapicon" style=" "></i></div>

<div class="col-12 col-lg-12 mt-2 d-none d-sm-block">
<fieldset class="formRow">
<div class="formRow--item">
<label for="destination" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="destination" id="destination" class="formRow--input js-input addclearbutton" value="Mumbai (BOM)" autocomplete="off" placeholder="To" onClick="this.select();">
<i class="zmdi zmdi-flight-land zmdi-hc-2x icf"></i>
<input name="destination_airport" id="destination_airport" type="hidden" value="BOM">
</label>
</div>
</fieldset>
</div>



<div class="col-6 col-sm-6 col-lg-6 mt-2 date-row" class="col-6 col-sm-6 col-lg-2 mt-2 date-row">
<fieldset class="formRow">
<div class="formRow--item">
<label for="date" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="trip_start_date" id="dateNew" readonly class="formRow--input js-input" autocomplete="off" value="15/09/2023" placeholder="Depart Date">
<i class="zmdi zmdi-calendar-alt zmdi-hc-2x icf"></i>
</label>
</div>
</fieldset>
</div>
<div class="col-6 col-sm-6 col-lg-6 mt-2 date-row" id="round-trip">
<fieldset class="formRow">
<div class="formRow--item">
<label for="date" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="trip_end_date" id="dateNewRet" readonly class="formRow--input js-input" autocomplete="off" value="20/09/2023" placeholder="Return Date">
<i class="zmdi zmdi-calendar-alt zmdi-hc-2x icf"></i>
<a href="javascript:void(0)" tabindex="-1" class="clearbtn " id="round-trip-remove" style><div class><i class="zmdi zmdi-close-circle text-danger"></i></div></a>
</label>
</div>
</fieldset>
</div>
<div class="col-6 col-sm-6 col-lg-6 mt-2 date-row" style="display:none;" id="round-trip-add">
<div class="pt-0 pt-3"><a href="javascript:void(0)" class="text-primary"><i class="zmdi zmdi-calendar-alt "></i> <u class="text-primary">Add Return Date</u></a></div>
</div>


<div class="col-12 col-md-8 mt-3">
<fieldset class="formRow">
<div class="formRow--item">
<label for="traveller" class="formRow--input-wrapper js-inputWrapper">
<input type="text" name="traveller" id="traveller" class="formRow--input js-input travellerDetails" autocomplete="off" value="1 Travellers, Economy" type="text" readonly placeholder="Travellers & Cabin">
<i class="zmdi zmdi-account-circle zmdi-hc-2x icf"></i>
<i class="zmdi zmdi-chevron-down zmdi-hc-2x arrowDwn"></i>
</label>
</div>
</fieldset>
<div class="pax-popover" style="position: absolute; ">
<i class="zmdi zmdi-hc-2x zmdi-close" style="position: absolute;right: 3px;top: -3px;z-index:1; " onclick="$('.pax-popover').hide();"></i>
<div class="d-flex justify-content-start">
<div class="p-2 pt-3 font-weight-bold">Adult</div>
<div class="ml-auto p-2">
<div class="input-group">
<span class="input-group-btn">
<button type="button" class="btn operator btn-sm btn-primary mr-1 p-1" data-type="minus" data-field="adult">
<i class="zmdi zmdi-hc-2x zmdi-minus-circle"></i>
</button>
</span>
<input type="text" name="adult" readonly="readonly" class="form-control paxCountField" value="1" min="1" max="9">
<span class="input-group-btn">
<button type="button" class="btn operator btn-sm btn-primary ml-1 p-1" data-type="plus" data-field="adult">
<i class="zmdi zmdi-hc-2x zmdi-plus-circle"></i>
</button>
</span>
</div>
</div>
</div>
<div class="d-flex justify-content-start">
<div class="p-2 pt-3 font-weight-bold">Child</div>
<div class="ml-auto p-2">
<div class="input-group" style="margin-top:10px;">
<span class="input-group-btn">
<button type="button" class="btn operator btn-sm btn-primary mr-1 p-1" data-type="minus" data-field="child">
<i class="zmdi zmdi-hc-2x zmdi-minus-circle"></i>
</button>
</span>
<input type="text" name="child" readonly="readonly" class="form-control paxCountField" value="0" min="0" max="6">
<span class="input-group-btn">
<button type="button" class="btn operator btn-sm btn-primary ml-1 p-1" data-type="plus" data-field="child">
<i class="zmdi zmdi-hc-2x zmdi-plus-circle"></i>
</button>
</span>
</div>
</div>
</div>
<div class="d-flex justify-content-start">
<div class="p-2 pt-3 font-weight-bold">Infant</div>
<div class="ml-auto p-2">
<div class="input-group" style="margin-top:10px;">
<span class="input-group-btn">
<button type="button" class="btn operator btn-sm btn-primary mr-1 p-1" data-type="minus" data-field="infant">
<i class="zmdi zmdi-hc-2x zmdi-minus-circle"></i>
</button>
</span>
<input type="text" name="infant" readonly="readonly" class="form-control paxCountField" value="0" min="0" max="6">
<span class="input-group-btn">
<button type="button" class="btn operator btn-sm btn-primary ml-1 p-1" data-type="plus" data-field="infant">
<i class="zmdi zmdi-hc-2x zmdi-plus-circle"></i>
</button>
</span>
</div>
</div>
</div>
<div class="d-flex justify-content-start">
<div class="p-2 pt-3 font-weight-bold">Class</div>
<div class="ml-auto p-2">
<select name="classi" id="classi" class="form-control form-control-sm">
<option value="economy" selected="selected">Economy</option>
<option value="business">Business</option>
<option value="first">First</option>
</select>
</div>
</div>
<div class="text-center">

<input type="button" name="done" class="btn btn-danger bgshade-2 font-weight-bold" onclick="$('.pax-popover').hide();" style="width: 150px;" value="Done">
</div>
</div>
<input type="hidden" name="adult" id="adult" value="1">
<input type="hidden" name="child" id="child" value="0">
<input type="hidden" name="infant" id="infant" value="0">
<input type="hidden" name="class" id="class" value="economy">
<input type="hidden" name="source" id="source" value="direct">
<input type="hidden" name="pgn" id="pgn" value="book">
</div>

<div class="col-12 col-md-4 mt-3">
<div class="form-group">
<button class="btn btn-danger  mt-0 btn-block bgshade-2 btn-lg font-weight-bold" type="submit" name="search" id="search_btn_home"> Search</button>
</div>
</div>
</div>
</form>
</div>
<div id="flight_form_loader" class="text-center">
<i class="zmdi zmdi-rotate-right zmdi-hc-spin zmdi-hc-3x"></i>
</div>
</div>
</div>
</div>
</div>

<div class="modal border-0 fadeInDown animated  " id="upgrade_form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
<div class="modal-content border-0 shadow-lg">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Select Your Fare</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
</div>
</div>
</div>
</div>

<div class="modal fade" id="makeModal" tabindex="-1" role="dialog" aria-labelledby="makeModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title font-weight-bold" id="makeModalLabel">Session Expired</h5>
</div>
<div class="modal-body">
<div class="text-center">
<i class="zmdi zmdi-alert-circle-o zmdi-hc-5x animated infinite wobble zmdi-hc-fw text-danger"></i> <br>
<span class="font-weight-bold text-danger">Your session has expired.</span>
<br>
Please click refresh results.
</div>
</div>
<div class="modal-footer">
<a href="/?startAgain" class="btn btn-danger  bgshade-2">Start Again</a> <button type="button" class="btn btn-danger  bgshade-2" onclick="$('#Search_Flights').submit();">Refresh Results</button>
</div>
</div>
</div>
</div>
        </Fragment>
    )
}

export default Flight_form;
