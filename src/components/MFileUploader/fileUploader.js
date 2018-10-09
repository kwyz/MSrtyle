import vueDropzone from 'vue2-dropzone'
export default {
  name: 'm-file-uploader',
  components: {
    vueDropzone: vueDropzone
  },
  props: {
    serverUrl: {
      type: String,
      required: true
    },
    allowedFileType: String,
    allowMultipleUpload: {
      type: Boolean,
      default: false
    },
    defaultMessage: String
  },
  data () {
    return {
      readyFilesStatus: false,
      dropOptions: {
        url: '',
        acceptedFiles: '.pdf',
        dictDefaultMessage: '<i class="fas fa-cloud-upload-alt"></i> Încarca' +
          ' fișier .PDF',
        uploadMultiple: true
      },
      allFilesReadyUpload: false,
      filesAmmount: 0,
      filesSuccessfullLoad: 0,
      allFilesReadyLoaded: false,
      files: [],
      fileContent: []
    }
  },
  created () {
    if (this.serverUrl !== '' && this.serverUrl !== undefined) {
      this.dropOptions.url = this.serverUrl
    }
    if (this.allowedFileType !== '' && this.allowedFileType !== undefined) {
      this.dropOptions.acceptedFiles = this.allowedFileType
    }
    if (this.allowMultipleUpload !== '' &&
      this.allowMultipleUpload !== undefined) {
      this.dropOptions.uploadMultiple = this.allowMultipleUpload
    }
    if (this.defaultMessage !== '' && this.defaultMessage !== undefined) {
      this.dropOptions.dictDefaultMessage = this.defaultMessage
    }
  },
  methods: {
    // Function that check if in dropzone was droped file with same content
    // like any loaded file
    exist: function (fileContentInBase64) {
      if (this.fileContent.includes(fileContentInBase64)) {
        return true
      }
      this.fileContent.push(fileContentInBase64)
      return false
    },

    // Function that is triggered when file is added to the dropzone
    addedFile: function (file) {
      let reader = new FileReader()
      let $this = this
      reader.readAsDataURL(file)
      reader.onload = function (event) {
        // Checkingc process  if file with the same content already exist in
        // dropzone
        if (!$this.exist(event.target.result)) {
          $this.filesAmmount++
          $this.allFilesReadyLoaded = false
          $this.files.push(file)

          /* Section of changing file appearance in dropzone */

          // Changing image thumbnail of the pdf file
          let fileImage = document.getElementById('drop1')
            .getElementsByClassName('dz-image')
          for (let index = 0; index < fileImage.length; index++) {
            fileImage[index].parentElement.style.textAlign = 'center'
            fileImage[index].firstChild.src = require(`./res/file.png`)
          }
          // Changing of the file-size and file-name labels positioning each
          // other
          let fileInformation = document.getElementById('drop1')
            .getElementsByClassName('dz-details')
          for (let index = 0; index < fileInformation.length; index++) {
            let fileSizeInformation = fileInformation[index].children[0]
            let fileNameInformation = fileInformation[index].children[1]
            if (fileSizeInformation.className === 'dz-size') {
              fileInformation[index].insertBefore(fileNameInformation,
                fileSizeInformation)
            }
          }
          // Emit event to parent that all added file  currently in process of
          // loading, so event emit false value
          $this.$emit('loaded', false)
        } else {
          // If is already added file with the current file content, this
          // current file is deleted
          $this.$refs.fileLoaderDropZone.removeFile(file)
          $this.$emit('loaded', true)
        }
      }
    },
    // Function that is triggered when added file is loaded with success
    succesLoadFile: function (file) {
      // Count success loaded files
      this.filesSuccessfullLoad++
      // Checking if number of added files is equal with success loaded files
      this.allFilesReadyLoaded = this.filesAmmount ===
        this.filesSuccessfullLoad && this.filesAmmount > 0
      // Emit event to parent that all files are loaded with succes
      this.$emit('loaded', this.allFilesReadyLoaded)
    }
  }
}
