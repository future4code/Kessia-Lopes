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
]
