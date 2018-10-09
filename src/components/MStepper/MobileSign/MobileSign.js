import AlertBox from '@/components/AlertBox/Index'
export default {
  name: 'SignSelector',
  components: {
    'alert-box': AlertBox
  },
  data () {
    return {
      code: 8098,
      firstBoxDescription: '',
      seccondBoxDescription: '',
      thirdBoxDescription: ''
    }
  },
  created () {
    this.firstBoxDescription = `<div class="ml-1 mr-1 small">
        <span class="mt-4 mb-3 mr-3 ml-3 text-left"> Este să nu părăsiți această pagină pentru nu pierde semnătura. </span></div> `
    this.seccondBoxDescription = `  <div class="text-left"><span class="text-left">Pe ecranul telefonului dumnevoastră mobil va aparea cererea de aplicare a semnăturii mobile</small>
            <span class="mt-3">Verificați dacă codul operațiunii afișat pe ecranul telefonului mobil este
                <span class="text-success ">${this.code}</span></span>
            <span class="text-left mt-3 mb-3">Apoi introduceți codul <span class="text-success">PIN</span> de semnare pentru a aplica semnătura</span></div>`
    this.thirdBoxDescription = `<div class="text-left"><span class="text-left">În caz că cererea de semnare nu apare pe ecranul telefonului mobil cu serviciul de semnătură mobila activat, vă rugăm să reporniti telefonul și să repetati procesul de semnare.
                                Contactati operatorul de telefonie mobilă și verificati dacă totul este în regulă cu serviciul de semnătură mobilă.</span></div>`
  }
}
