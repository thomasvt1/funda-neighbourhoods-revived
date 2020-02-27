import { INCOME_BAND_COLORS } from "./constants";
import { getIncomeBand, formatIncomeValue, formatMoney } from "./utils";

export const VIEWABLE_PROPERTIES = [
  {
    name: "neighbourhoodName",
    getValue: properties => properties.buurtnaam
  },
  {
    name: "meanIncomePerResident",
    getValue: properties => {
      const income = properties.gemiddeld_inkomen_per_inwoner * 1000;
      const incomeBand = getIncomeBand(income);

      return formatIncomeValue(income, incomeBand);
    },
    getColor: properties => {
      const income = properties.gemiddeld_inkomen_per_inwoner * 1000;
      const incomeBand = getIncomeBand(income);

      return INCOME_BAND_COLORS[incomeBand];
    }
  },
  {
    name: "meanIncomePerIncomeRecipient",
    getValue: properties => {
      const income = properties.gemiddeld_inkomen_per_inkomensontvanger * 1000;
      return formatMoney(income);
    }
  },
  {
    name: "residentsAge0to14Percentage",
    getValue: properties => `${properties.percentage_personen_0_tot_15_jaar}%`
  },
  {
    name: "residentsAge15to24Percentage",
    getValue: properties => `${properties.percentage_personen_15_tot_25_jaar}%`
  },
  {
    name: "residentsAge25to44Percentage",
    getValue: properties => `${properties.percentage_personen_25_tot_45_jaar}%`
  },
  {
    name: "residentsAge45to64Percentage",
    getValue: properties => `${properties.percentage_personen_45_tot_65_jaar}%`
  },
  {
    name: "residentsAge65AndOlder",
    getValue: properties =>
      `${properties.percentage_personen_65_jaar_en_ouder}%`
  },
  {
    name: "residentsFromAntillesOrAruba",
    getValue: properties =>
      `${properties.percentage_uit_nederlandse_antillen_en_aruba}%`
  },
  {
    name: "singlePersonHouseholds",
    getValue: properties => `${properties.percentage_eenpersoonshuishoudens}%`
  },
  {
    name: "married",
    getValue: properties => `${properties.percentage_gehuwd}%`
  },
  {
    name: "divorced",
    getValue: properties => `${properties.percentage_gescheid}%`
  },
  {
    name: "householdsWithChildren",
    getValue: properties => `${properties.percentage_huishoudens_met_kinderen}%`
  }
];

/*

percentage_huishoudens_met_kinderen: 17
percentage_huishoudens_zonder_kinderen: 22
percentage_huishoudens_met_hoogste_inkomen: 18
percentage_personen_met_hoog_inkomen: 28
percentage_woningen_met_eigendom_onbekend: 0
perc_huurwoningen_in_bezit_woningcorporaties: 31
perc_huurwoningen_in_bezit_overige_verhuurders: 35
percentage_huurwoningen: 66
percentage_koopwoningen: 34
percentage_huishoudens_met_laagste_inkomen: 47
percentage_personen_met_laag_inkomen: 35
percentage_leegstand_woningen: 7
percentage_huishoudens_met_een_laag_inkomen: null
percentage_uit_marokko: 2
percentage_meergezinswoning: 92
percentage_niet_westerse_allochtonen: 21
percentage_ongehuwd: 50
percentage_overige_niet_westerse_allochtonen: 13
percentage_huishoudens_onder_of_rond_sociaal_minimum: 10
aandeel_stadsverwarming: -99999999
sterfte_relatief: 29
percentage_uit_suriname: 3
percentage_uit_turkije: 2
percentage_verweduwd: 10
percentage_westerse_allochtonen: 25
percentage_bouwjaarklasse_tot_2000: 96
percentage_bouwjaarklasse_vanaf_2000: 4
meest_voorkomende_postcode: "1083"
stedelijkheid_adressen_per_km2: 1
sterfte_totaal: 225
water: "NEE"
wijkcode: "WK036304"
woningvoorraad: 4321
gemiddelde_woningwaarde: 203
aantal_personen_met_een_ww_uitkering_totaal: 130
aantal_personen_met_een_algemene_bijstandsuitkering_totaal: 190

  */
