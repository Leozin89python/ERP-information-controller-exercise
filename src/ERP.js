{
    console.log("==============")
    console.log("=====ERP======")
    console.log("====System====")
    console.log("==============")
    console.log("")
    
    function Mock(mail,sign){
       
        if(mail != 'leozin@yahoo.com' && sign != 1234 || mail != 'leo@git.com' && sign != 1234 ||  mail != 'leleu@yarn.com' && sign != 1234 ){
            console.log('error: sign in or mail invalid')
            console.log('Try again')
        }else   {
        
        return (["Success loged!",
                //insert here just only you logged OK!
                operation(3)


               ])
        }
    }
    
    
       this.sectors = [{
       
       buy: {
           worker1 :    {
               seller:'Donald Sutherland'
           }
           
       },
       warehouse :  {
           car1: {
           cod: 01017,
           qntt: 03
           }
       },
       distribution :   {
           vehicle1: { 
               car:'truck'
           },
           vehicle2 : {
               car: 'sedan'
           }
       },
       product :    {
           car: 'volvo',
           price: '34.534,56 $'
       },
       person : {
           client: {
               name: 'Leonard Snart',
               payment: 'aproved'
           },
           team :   {
               ceo: 'Helena Boham Carter',
               manager: 'Johnny Depp',
               supervisor: 'Michael Mann',
               chiefOfficer: 'Tim Burton'
           }
           
       }
    }]
    
    
     operation = (section) => {
        
                   switch(section){
                       case 1:
                           return this.sectors.map(     e=> e.buy.worker1)
                           break
                        case 2:
                           return this.sectors.map(     e=> e.warehouse.car1)
                           break
                        case 3:
                           return this.sectors.map(     e=> e.distribution.vehicle1)    
                           break
                         case 4:
                           return this.sectors.map(     e=> e.product) 
                           break
                         case 5:
                           return this.sectors.map(     e=> e.person.client)
                           break
                        case 6:
                            return this.sectors.map(    e=> e.person.team)
                            break
                        case 7:
                            return this.sectors.map(    e=> e.distribution.vehicle2)
                            break
                        default:
                            return 'error: invalid input'
                   }
               }


}
console.log(Mock('leo@git.com', 1234))