const app = new Vue({

  el: '#root',
  data: {
    user: {
      name: 'Nigel',
      avatar: '_7'
    },

    userNewMessage: '',

    activeContact: 0,

    contacts: [
      {
        name: 'RRR',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '12/04/2022 06:30:55',
            text: 'OH LO ZI É USCITO IL CAPITOLO',
            status: 'sent'
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'JA VELOCE LOGGA',
            status: 'sent'
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'EDEAI ARRIVO',
            status: 'received'
          }
        ],
      },
      {
        name: 'Josel',
        avatar: '_2',
        visible: false,
        messages: [
          {
            date: '12/04/2022 06:30:55',
            text: 'oh ci vogliamo beccare sabato a lanciano?',
            status: 'sent'
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'si dai, ci sto',
            status: 'received'
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'vabbé dai. Allora parto per le 9:30 come al solito',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Alberto',
        avatar: '_3',
        visible: false,
        messages: [
          {
            date: '12/04/2022 06:30:55',
            text: 'minchia zio sono ubriachissimo',
            status: 'received'
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'Albé ma vai a dormire dio bono',
            status: 'sent'
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'hai ragione zio...',
            status: 'received'
          }
        ],
      },
      {
        name: 'Rotolone',
        avatar: '_4',
        visible: false,
        messages: [
          {
            date: '12/04/2022 06:33:02',
            text: 'Giovedí vuoi venire al quizzettone?',
            status: 'sent'
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'Boh non lo so, ti faccio sapere',
            status: 'received'
          }
        ],
      },
    ]
  },
  computed: {},
  methods: {
    chatSelector(index) {
      this.activeContact = index
    },

    sendMessage() {
      if (this.userNewMessage.trim() !== '') {
        const newMessage = {
          date: '26/08/2022 12:25:30',
          text: this.userNewMessage,
          status: 'sent',
        }
        this.contacts[this.activeContact].messages.push(newMessage)
        

      }
    },
    newReceiveMessage() {

      const newReceivedMessage = {
        date: '26/08/2022 12:25:31',
        text: 'ok',
        status: 'received',
      }
      this.contacts[this.activeContact].messages.push(newReceivedMessage)


    },
    automaticResponse() {
      console.log(this.userNewMessage)
      
      if(this.userNewMessage.trim() !== ''){
        this.userNewMessage = ''
        setTimeout(this.newReceiveMessage, 1000)

      }
    }




  },

},
)