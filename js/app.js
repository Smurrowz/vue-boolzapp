const app = new Vue({

  el: '#root',
  data: {
    user: {
      name: 'Nigel',
      userMenu: false,
      avatar: '_7'
    },
    replies : [
      "ok",
      "BRUH BRUH BRUH BRUH",
      "MAAAN STFU",
      "BUCCI STAI ZITTO CHE SEI UN BOTTAZZO",
      "GG EZ thanks for tutorial",
      "Albé sei un babbo, Charizard é fuoco volante",
      "NO",
      "Dandyyyyyyyyyyyyr",
      "Pazz.",
      "Esko",
      "MAMMA MI SI SONO BLOCCATE LE GAMBE",
      "no devo giocare a sushi sashimi 794 Z",
      "King prendi un tank una volta pls",
      "Ziopé ma se ti ho raccolto dalla strada"
    ],
    userNewMessage: '',
    contactSearch: '',
    activeContact: 0,
    msgInfo: {
      data: '',
      autore : ''
    },
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
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'JA VELOCE LOGGA',
            status: 'sent',
            activeMenu: false,
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'EDEAI ARRIVO',
            status: 'received',
            activeMenu: false,
            activeInfo: false,
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
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'si dai, ci sto',
            status: 'received',
            activeMenu: false,
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'vabbé dai. Allora parto per le 9:30 come al solito',
            status: 'sent',
            activeMenu: false,
            activeInfo: false,
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
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:33:02',
            text: 'Albé ma vai a dormire dio bono',
            status: 'sent',
            activeMenu: false,
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'hai ragione zio...',
            status: 'received',
            activeMenu: false,
            activeInfo: false,
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
            activeInfo: false,
          },
          {
            date: '12/04/2022 06:38:18',
            text: 'Boh non lo so, ti faccio sapere',
            status: 'received',
            activeMenu: false,
            activeInfo: false,
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
          date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
          text: this.userNewMessage,
          status: 'sent',
          activeMenu: false,
          activeInfo: false,
        }
        this.contacts[this.activeContact].messages.push(newMessage)
        


      }
    },
    newReceiveMessage() {

      const newReceivedMessage = {
        date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
        text: this.replies[Math.floor(Math.random()*this.replies.length)],
        status: 'received',
        activeMenu: false,
        activeInfo: false,
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
    popInfo(index) {
      this.contacts[this.activeContact].messages[index].activeInfo = !this.contacts[this.activeContact].messages[index].activeInfo;
    },
    deleteMessage(index) {

      this.contacts[this.activeContact].messages.splice(index, 1);

    },
    deleteAllMessages() {
      const lunghezzaArray = this.contacts[this.activeContact].messages.length
      this.contacts[this.activeContact].messages.splice(0,lunghezzaArray)
      
      
    },
    showInfo(index){
      this.msgInfo.autore = ''
      this.msgInfo.data = ''
      if(this.contacts[this.activeContact].messages[index].status === 'sent'){
        // console.log(this.user.name) 
        this.msgInfo.autore = 'Tu'
        
      }else{
        // console.log(this.contacts[this.activeContact].name)
        this.msgInfo.autore = this.contacts[this.activeContact].name
        
      }
      this.msgInfo.data = this.contacts[this.activeContact].messages[index].date
      
    }
    


  },

},
)