class Logger {

  constructor() {
    
  }
  async attachNote(testInfo, message) {
    await testInfo.attach('Note', {
      body: message,
      contentType: 'text/plain'
    });
  }
}

module.exports = { Logger };