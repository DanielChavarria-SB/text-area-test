import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RealestateCardComponent } from './components/realestate-card/realestate-card.component';
import { MiaChatBurbleComponent } from './components/mia-chat-burble/mia-chat-burble.component';
import { MiaConnectionService } from './services/mia-connection.service';
import { MiaSelectionComponent } from './components/mia-selection/mia-selection.component';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;
  @ViewChild('messagescontainer', { read: ViewContainerRef }) messagescontainer!: ViewContainerRef;
  firstInteraction: boolean = true;
  firstInteractionMsg: string = '¡Hola! 👋 Bienvenido al mundo *Ciencuadras.* Aquí podrás👇 🏢 Buscar tu inmueble ideal 🏠 Solicitar un avalúo 💳 Pagar tu administración 💰 Solicitar financiación para tu vivienda 📄Gestionar tus trámites inmobiliarios *Recuerda que Ciencuadras te cuadra todo* 💙';
  userSaluteMessage: string = 'Hola Mia , estoy buscando el inmueble de mis sueños';

  pathOptions: string[] = [
    'Encuentra un inmueble',
    'Financiar mi vivienda',
    'Solicitar avaluo'
  ];

  items = Array.from({length: 30}).map((_, i) => `Item #${i}`);



  constructor(private miaService: MiaConnectionService) { 
  }

  ngAfterViewInit(): void{
    //renderedRangeStream
    this.scrollEvent('action','event','otro');
  }

  options: AnimationOptions = {
    path: '../assets/lottie-animations/animation.json'
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  scrollEvent(action:string, event:string , otro?: string){
    let objectico: any = {action , event};
    if(otro){
      objectico.otro = otro;
    }
    console.log('objectico',objectico);

  }



  evaluateFirstInteracion() {
    if (this.firstInteraction) {
      this.firstInteraction = false;
      let burbleChatComponent = this.messagescontainer.createComponent(MiaChatBurbleComponent);
      burbleChatComponent.instance.messageTime = '10:00';
      burbleChatComponent.instance.messagecontent = this.firstInteractionMsg;
      burbleChatComponent.instance.isUserMessage = false;

      setTimeout(() => 3000);


      let options = this.messagescontainer.createComponent(MiaSelectionComponent);
      options.instance.inputOptions = this.pathOptions;
      options.instance.optionSelectedEmitter.subscribe((selectedOption: string) => {
        this.validatePathOption(selectedOption);
      });
    }
  }

  displayNewMsg(msg: string | null) {
    let burbleChatComponent = this.messagescontainer.createComponent(MiaChatBurbleComponent);
    burbleChatComponent.instance.messageTime = '10:00';
    burbleChatComponent.instance.messagecontent = msg;
    burbleChatComponent.instance.isUserMessage = false;
  }

  displayNewRealestateCard() {
    let cardRealEstate = this.messagescontainer.createComponent(RealestateCardComponent);
  }

  requestDataFromService(msg: string) {
    this.miaService.requestDataFromService(msg).subscribe(res => {
      console.log(res);
    });
  }

  validatePathOption(selectedOption: string) {
    switch (selectedOption) {
      case this.pathOptions[0]:  // encuentra un inmueble
        this.requestDataFromService(this.userSaluteMessage);
        break;
    }
  }

  validatecontactOptions() {
    this.response = this.response.result;
    this.response = this.response.replace(/'/g, '"')
    this.response = this.response.replace(/None/g, 'null')

    if(this.validateResponseType(this.response)){
      this.response = JSON.parse(this.response);
      this.response.secondary = {
        "total": 3885,
        "totalPages": 389,
        "properties": [
            {
                "latitude": "4",
                "offerType": "Arriendo"
            },
            {
                "latitude": "5",
                "offerType": "Arriendo"
            },
            {
                "latitude": "6",
                "offerType": "Arriendo"
            }
        ]
      }

      
      if(!this.response.secondary){
        console.log(this.response.primary.properties.length);
      } else {
        console.log('secondary');

        let vars = {
          secondaryOptions: true, 
        }
      }

    }
  }

  validateMoreOptions(){
    console.log(this.validateResponseType(this.response));
    console.log(this.response.ownerType);
  }

  response: any = {"ownerType":"Inmobiliaria","rooms":"3","deliveryTime":0,"city":"Bogotá","latitude":"4.7235875","type":"search_context","uuid":"i2037106","salida":"Ciencuadras tiene 2 Apartamentos en Venta en Bogotá, Cundinamarca, ubicada en la zona Noroccidente, en la localidad de Engativá, específicamente en el barrio El Dorado, con 2 baños, con 3 habitaciones, sin gimnasio, con estrato 3, con area de 46 metros cuadrados, con valor de administración de $200000 pesos, con valor de venta de $170000000 pesos. Para más información entrar a https://pre.ciencuadras.com/venta/bogota/engativa/el-dorado/apartamento?utm_source=Mia_Wp .","offer":0,"offerType":"Venta","zone":"Noroccidente","propertyType":"10","id":86924,"department":"Cundinamarca","rentPrice":0,"realEstateType":"Apartamento","propertyId":2037106,"whatsappContact":"3227863251","parkingSpaces":"0","longitude":"-74.1355826","timestamp":null,"owner":"HOUM ventas Colombia","area":46,"image":"https://pre.ciencuadras.com/sources/images/result/no-photo-property.jpg","salePrice":170000000,"locality":"Engativá","bathrooms":"2","creationDate":1710861829000,"version":null,"url":"https://pre.ciencuadras.com/inmueble/apartamento-en-venta-en-el-dorado-bogota-2037106?utm_source=Mia_Wp","stratum":"3","administrationPrice":200000,"callContact":null,"modificationDate":1710861829000,"codigo_inmueble":"258729-35019","propertyName":null,"codigo_proyecto":null,"housingLeasingPrice":34000000,"location":{"lon":"-74.1355826","lat":"4.7235875"},"gym":"No","neighborhood":"El Dorado","projectName":null,"projectId":null,"mortgageCreditPrice":51000000,"age":0,"status":"Activo"}


  validateResponseType(apiResponse: string) {
    try {
      JSON.parse(apiResponse);
      return true;
    } catch (e) {
      return false;
    }
  }

  calculator(){
    var pagination_size = 3;
    var indice_inmueble = 5;
    var paginator_counter = 2;

    var indexOnArray = pagination_size - ((pagination_size*paginator_counter) - indice_inmueble);
    console.log(indexOnArray);
  }



}



// var apiResponse = attributeApi.get('respuesta_a_usuario');

// if(validateResponseType(apiResponse)){
//     console.log('sirve');
// } else {
//     console.log('no sirve');
// }

// function validateResponseType(apiResponse){
//     try {
//         JSON.parse(apiResponse);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }