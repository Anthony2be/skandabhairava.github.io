var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/skandabhairava/skandabhairava.github.io.git', // Update to point to your repository  
        user: {
            name: 'skandabhairava', // update to use your name
            email: 'skandabhairava@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)