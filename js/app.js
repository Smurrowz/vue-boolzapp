const app = new Vue({

  el: '#root',
  data: {
    user: {
      name: 'Nigel',
      avatar: '_7'
    },

    userNewMessage: '',
    contactSearch: '',
    activeContact: 0,

    contacts: [
      {
        name: 'RRR',
        avatar: '_1',
        visible: true,
        lastLogin: '18/08/2022 16:30:55',
        messages: [
          {
            date: '12/04/2022 06:30:55',
            text: 'OH LO ZI É USCITO IL CAPITOLO',
            status: 'sent',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'JA VELOCE LOGGA',
            status: 'sent',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'EDEAI ARRIVO',
            status: 'received',
            activeMenu: false,
          }
        ],
      },

      {
        name: 'Josel',
        avatar: '_2',
        visible: true,
        lastLogin: '28/08/2022 16:30:55',
        messages: [
          {
            date: '12/04/2022 06:30:55',
            text: 'oh ci vogliamo beccare sabato a lanciano?',
            status: 'sent',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'si dai, ci sto',
            status: 'received',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'vabbé dai. Allora parto per le 9:30 come al solito',
            status: 'sent',
            activeMenu: false,
          }
        ],
      },
      {
        name: 'Alberto',
        avatar: '_3',
        visible: true,
        lastLogin: '31/10/2022 16:30:55',
        messages: [
          {
            date: '12/04/2022 06:30:55',
            text: 'minchia zio sono ubriachissimo',
            status: 'received',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'Albé ma vai a dormire dio bono',
            status: 'sent',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'hai ragione zio...',
            status: 'received',
            activeMenu: false,
          }
        ],
      },
      {
        name: 'Rotolone',
        avatar: '_4',
        visible: true,
        lastLogin: '31/11/2022 16:30:55',
        messages: [
          {
            date: '12/04/2022 06:33:02',
            text: 'Giovedí vuoi venire al quizzettone?',
            status: 'sent',
            activeMenu: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'Boh non lo so, ti faccio sapere',
            status: 'received',
            activeMenu: false,
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
          activeMenu: false,
        }
        this.contacts[this.activeContact].messages.push(newMessage)
        for (let i = 0; i < this.contacts[this.activeContact].messages.length; i++) {
          const element = this.contacts[this.activeContact].messages[i];
          
          if(element.text === 'la nostra chat é vuota'){
            this.contacts[this.activeContact].messages.splice(0,1)
          }
        }


      }
    },
    newReceiveMessage() {

      const newReceivedMessage = {
        date: '26/08/2022 12:25:31',
        text: 'ok',
        status: 'received',
        activeMenu: false,
      }
      this.contacts[this.activeContact].messages.push(newReceivedMessage)


    },
    automaticResponse() {
      console.log(this.userNewMessage)

      if (this.userNewMessage.trim() !== '') {
        this.userNewMessage = ''
        setTimeout(this.newReceiveMessage, 1000)

      }
    },
    contactFind() {
      console.log(this.contactSearch)
      for (let i = 0; i < this.contacts.length; i++) {
        const el = this.contacts[i];
        const normName = el.name.toLowerCase()
        const normInput = this.contactSearch.toLowerCase()
        if (normName.includes(normInput)) {
          el.visible = true
        } else {
          el.visible = false
        }


      }
    },
    popMenu(index) {

      this.contacts[this.activeContact].messages[index].activeMenu = !this.contacts[this.activeContact].messages[index].activeMenu;

    },

    deleteMessage(index) {

      this.contacts[this.activeContact].messages.splice(index, 1);

    },
    deleteAllMessages() {
      const lunghezzaArray = this.contacts[this.activeContact].messages.length
      this.contacts[this.activeContact].messages.splice(0,lunghezzaArray)
      const emptyChat = {
        
        text: 'la nostra chat é vuota',
        
        
      }
      this.contacts[this.activeContact].messages.push(emptyChat)

      
    },



  },

},
)