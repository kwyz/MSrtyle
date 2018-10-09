export default {
  name: 'SignResult',
  data () {
    return {
      isSigned: true,
      sendDocsViaEmail: false,
      memorisedFiles: [],
      fileSigned: [
        {
          name: 'LongName LongName LongName LongName LongName LongName LongName LongName.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#2.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#2.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#2.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#2.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#6.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#7.pdf',
          signedStatus: true
        },
        {
          name: 'file_name#8.pdf',
          signedStatus: true
        }
      ]
    }
  },
  methods: {
    fileIsChecked (fileName, fileId) {
      var obj = this.memorisedFiles.find(function (obj) {
        return obj.fileId === fileId.toString()
      })
      return obj !== undefined
    },
    memoriseFiles (fileName, fileId) {
      fileId = fileId.toString()
      let fileObj = {
        fileName: fileName,
        fileId: fileId
      }
      this.addOrRemoveFromArray(fileObj, fileId)
    },
    showSendForm () {
      if (this.sendDocsViaEmail === true) this.sendDocsViaEmail = false
      else this.sendDocsViaEmail = true
    },
    addOrRemoveFromArray: function (object, id) {
      var removeIndex = this.memorisedFiles
        .map(function (object) {
          return object.fileId
        })
        .indexOf(id)

      if (removeIndex === -1) {
        this.memorisedFiles.push(object)
      } else {
        this.memorisedFiles.splice(removeIndex, 1)
      }
      if (this.memorisedFiles.length < 1) this.sendDocsViaEmail = false
    },
    markAllCheckBoxes () {
      if (!this.isCheckedAllCheckBoxes()) {
        this.memorisedFiles = []
        for (var indexOfFile in this.fileSigned) {
          this.memoriseFiles(this.fileSigned[indexOfFile].name, indexOfFile.toString())
        }
      } else {
        this.memorisedFiles = []
        this.sendDocsViaEmail = false
      }
    },
    isCheckedAllCheckBoxes () {
      return this.fileSigned.length === this.memorisedFiles.length
    },
    downloadFiles () {
      for (let i = 0; i < 2; i++) {
        var anchor = document.createElement('a')
        anchor.href = '/Msign Test PDF.pdf'
        anchor.download = 'Msign Test PDF.pdf'
        anchor.click()
      }
    }
  }
}
