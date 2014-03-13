var Locale = {}

Locale.dateFormat = 'mm-dd-jjjj';
Locale.timeFormat = 'hh:mm';
Locale.edit = "Wizigje reis";
Locale.plan = "Plan reis";
Locale.date = "Datum";
Locale.time = "Tiid";
Locale.arrive = "Oankomme op"
Locale.depart = "Fuortgean om"
Locale.geocoderInput = "Stasjon, halte, adres";
Locale.startpointEmpty = "Gjin startpunt ynfierd";
Locale.noStartpointSelected = "Gjin startpunt selektearre";
Locale.destinationEmpty = "Gjin bestimming ynfierd";
Locale.noDestinationSelected = "Gjin bestimming selektearre";
Locale.noValidDate = "Gjin jildige datum ynfierd";
Locale.noValidTime = "Gjin jildige tiid ynfierd";
Locale.dateTooEarly = function ( minDate8601 ) { return "De planner wurket pas fanôf "+minDate8601.split('-').reverse().join('-'); }
Locale.dateTooLate = function ( maxDate8601 ) { return "De planner hat gjin tsjinstregeling nei "+maxDate8601.split('-').reverse().join('-'); }
Locale.from = "Fan";
Locale.via = "Fia";
Locale.to = "Nei";
Locale.months = ['Jannewaris','Febrewaris','Maart','April','Maaie','Juny','July','Augustus','Septimber','Oktober','Novimber','Desimber'];
Locale.days = ['Snein','Moandei','Tiisdei','Woansdei','Tongersdei','Freed','Sneon'];
Locale.earlier = 'Earder';
Locale.later = 'Letter';
Locale.noAdviceFound = 'Gjin reisadvys fûn';
Locale.loading = 'Dwaande mei laden';
Locale.walk = 'Rinne';
Locale.platformrail = 'Spoar';
Locale.platform = 'Perron';
// Locale.loading = 'Dwaande...';
Locale.amountTransfers = function ( transfers ) { if (transfers == 0) { return 'Direct'; } else { return transfers+ 'x oerstappe';} }

Locale.autocompleteMessages = {
        noResults: "Gjin fertuten dwaan.",
        results: function( amount ) {
			return amount + ( amount > 1 ? " resultaten binne " : " resultaat is" ) + " beskikber, brûk de omheech en omleech pylktoetsen om te navigearjen.";
        }
}
