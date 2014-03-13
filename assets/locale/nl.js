var Locale = {}

Locale.dateFormat = 'mm-dd-jjjj';
Locale.timeFormat = 'hh:mm';
Locale.loading = "Bezig...";
Locale.edit = "Wijzig reis";
Locale.plan = "Plan reis";
Locale.geocoderInput = "Station, halte, adres";
Locale.startpointEmpty = "Geen startpunt ingevoerd";
Locale.noStartpointSelected = "Geen startpunt geselecteerd";
Locale.destinationEmpty = "Geen bestemming ingevoerd";
Locale.noDestinationSelected = "Geen bestemming geselecteerd";
Locale.noValidDate = "Geen geldige datum ingevoerd";
Locale.noValidTime = "Geen geldige tijd ingevoerd";
Locale.dateTooEarly = function ( minDate8601 ) { return "De planner werkt pas vanaf "+minDate8601.split('-').reverse().join('-'); }
Locale.dateTooLate = function ( maxDate8601 ) { return "De planner heeft geen dienstregeling na "+maxDate8601.split('-').reverse().join('-'); }
Locale.from = "Van";
Locale.via = "Via";
Locale.to = "Naar";
Locale.date = "Datum";
Locale.time = "Tijd";
Locale.months = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
Locale.days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
Locale.earlier = 'Eerder';
Locale.later = 'Later';
Locale.noAdviceFound = 'Geen reisadvies gevonden';
Locale.loading = 'Bezig met laden';
Locale.walk = 'Loop';
Locale.platformrail = 'Spoor';
Locale.platform = 'Perron';
Locale.loading = 'Bezig...';
Locale.amountTransfers = function ( transfers ) { if (transfers == 0) { return 'Direct'; } else { return transfers+ 'x overstappen';} }
Locale.autocompleteMessages = {
        noResults: "Geen resultaten gevonden.",
        results: function( amount ) {
            return amount + ( amount > 1 ? " resultaten zijn " : " resultaat is" ) + " beschikbaar, gebruik de omhoog en omlaag pijltoetsen om te navigeren.";
        }
}

$(".label-from").text(Locale.from);
$(".label-via").text(Locale.via);
$(".label-dest").text(Locale.dest);
$(".label-time").text(Locale.time);
$(".label-date").text(Locale.date);
$(".label-edit").text(Locale.edit);
$(".label-plan").text(Locale.plan);

$(".planner-options-dateformat").text(Locale.dateFormat);
$(".planner-options-timeformat").text(Locale.timeFormat);

$("#planner-options-from").attr('placeholder', Locale.geocoderinput);
$("#planner-options-via").attr('placeholder', Locale.geocoderinput);
$("#planner-options-dest").attr('placeholder', Locale.geocoderinput);
$("#planner-options-submit").attr('data-loading-text', Locale.loading);
