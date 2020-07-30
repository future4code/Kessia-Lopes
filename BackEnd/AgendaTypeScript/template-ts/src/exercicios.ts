export{}
import  moment from 'moment'

type event = {
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
}

const allEvents: event[]=[
{
  name: 'Viagem',
  description: "Viagem para um casamento",
  startAt: moment("29/08/2020 19:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("01/09/2020 18:00", "DD/MM/YYYY HH:mm")
},
{
  name: 'Visita ao museu',
  description: "Visita ao Museu do Amanhã",
  startAt: moment("04/06/2021 13:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("04/06/2021 18:00", "DD/MM/YYYY HH:mm")
},
{
  name: 'Reunião',
  description: "Reunião da empresa",
  startAt: moment("02/08/2020 17:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("02/08/2020 18:00", "DD/MM/YYYY HH:mm")
},
]
console.log(allEvents)

moment.locale("pt-br")

const infoEvent = (events:event[]):void=>{
   events.forEach((item: event) => {
     const duration = item.finishAt.diff(item.startAt, "minutes");

    const today = moment();
    const daysUntilEvent = item.startAt.diff(today,"days");

    console.log(`Nome: ${item.name}`)
    console.log(`Horário de inicios: ${item.startAt.format(" dddd, DD [de] MMMM [de] YYYY, HH:mm")}`)
    console.log(`Horário de fim:${item.finishAt.format(" DD [de] MMMM [de] YYYY, HH:mm")}`)
    console.log(`Descrição:${item.description}`)
    console.log(`Duração: ${duration} minutos`)
    console.log(`Dias até o evento:${daysUntilEvent}`)

   } );
 

}
infoEvent(allEvents);
