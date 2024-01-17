09_props_basics




I dessa övningar skall vi titta på hur vi kan använda oss av props för att skicka information från en komponent (parent) till en annan komponent (child).
✅1.Börja med att skapa ett nytt react-projekt med hjälp av vite
✅2.I ditt nya projekt skapa en ny komponentsom heter ReceiverOfData. Syftet med denna komponent är att den skall få data från App-komponenten.
✅3.I komponenten ReceiverOfData, lägg till en parameter i funktions-deklarationen. Ni får här döpa denna parametertillprops. 
✅4.Gå till App-komponenten och rensa bort mycket av den html som finns där. Lägg till <ReceiverOfData /> inuti App. Nu kommer vi att anropa funktionen ReceiverOfData och vi har möjligheten att skicka med vilken information vi vill. 
✅5.Får att skicka informationen behöver vi lägga till ett attribut i <ReceiverOfData />-taggen. Detta attribut kommer att bli den egenskap i props-objektet som vi kan använda. Försök att hitta på ett bra namn för detta attribut/egenskap. 
✅6.Nu behöver ni ange ett värde för attributet. Om ni har valt att skicka en text så går det bra att bara skriva in det värde ni hade tänkt att skicka. Annars behöver ni använda interpolation för att komma åt det värde ni hade tänkt er. 
✅7.När ni har skapat ert attribut går ni tillbaka till ReceiverOfData och kan nu använda egenskapen med samma namn som attributet i ert props-objekt. Prova att interpolera detta i er komponent för att få det att synas på skärmen.
8.Nu kan du lägga till olika typer av attribut/egenskaper i props-objektet så att du kan ta emot många saker och använda dessa i din komponent. Prova att lägga till ett tal och en boolean och få dem att synas på skärmen. 
