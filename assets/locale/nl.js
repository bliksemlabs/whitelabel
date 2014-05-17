var Locale = {}

Locale.dateFormat = 'dd-mm-yy';
Locale.timeFormat = 'hh:mm';
Locale.dateAriaLabel = 'Datumkiezer, gebruik Ctrl en pijltjes om te navigeren';
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
Locale.months = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
Locale.days = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
Locale.daysMin = ['zo','ma','di','wo','do','vr','za'];
Locale.earlier = 'Eerder';
Locale.later = 'Later';
Locale.noAdviceFound = 'Geen reisadvies gevonden';
Locale.walk = 'Loop';
Locale.platformrail = 'Spoor';
Locale.platform = 'Perron';
Locale.amountTransfers = function ( transfers ) { if (transfers == 0) { return 'Direct'; } else { return transfers+ 'x overstappen';} }
Locale.autocompleteMessages = {
        noResults: "Geen resultaten gevonden.",
        results: function( amount ) {
            return amount + ( amount > 1 ? " resultaten zijn " : " resultaat is" ) + " beschikbaar, gebruik de omhoog en omlaag pijltoetsen om te navigeren.";
        }
}
