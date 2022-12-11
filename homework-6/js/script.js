document.addEventListener("DOMContentLoaded",() => {
    const API_LINK ='https://api.github.com/users/makushenkoao';
    const REPOS_API_LINK = `${API_LINK}/repos`
    const openReposInfo = document.querySelector('.js-open-repos-info')
    const reposContent = document.querySelector('.js-show-repos-content');

    let isDataExist = false;

    getUserInfo(API_LINK).then(data => data)

    openReposInfo.addEventListener('click', () => {
        if (isDataExist) {
            document.querySelector('.about-profile-content').classList.add('none')
            isDataExist = !isDataExist
        } else getReposInfo(REPOS_API_LINK).then(data => data)
    })

    function showUserInfo (data){
        const login = document.querySelector('.login')
        document.querySelector('.js-show-avatar img').src = `${data.avatar_url}`;
        document.querySelector('.js-show-name').innerHTML = data.name
        document.querySelector('.js-show-location').innerHTML = data.location
        document.querySelector('.js-show-bio').innerHTML = data.bio === null ? 'No bio' : data.bio;
        document.querySelector('.js-show-followers p').innerHTML = data.followers
        document.querySelector('.js-show-following p').innerHTML = data.following
        document.querySelector('.js-open-repos-info p').innerHTML = data.public_repos
        login.innerHTML = `@${data.login}`
        login.addEventListener('click', () => {
            document.location = `${data.html_url}`
        })
    }

    function showReposInfo (data) {
        if (reposContent.querySelectorAll('.js-check-repos').length === data.length) return
        data.forEach(item => {
            const reposBlock = document.createElement('div')
            const reposName = document.createElement('h3');
            const branch = document.createElement('p');
            const commitAt = document.createElement('p')
            reposBlock.className = 'line js-check-repos'
            reposName.innerHTML = `name: ${item.name}`
            branch.innerHTML = `branch: ${item.default_branch}`
            commitAt.innerHTML = `commit at: ${new Date(item.pushed_at).toLocaleString()}`
            reposBlock.appendChild(reposName)
            reposBlock.appendChild(branch)
            reposBlock.appendChild(commitAt)
            reposContent.append(reposBlock)
        })
    }

    function hideReposContent() {
        document.querySelector('.js-loading-content').classList.remove('none')
        document.querySelector('header').classList.add('none')
        document.querySelector('.about-profile-content').classList.add('none')
        document.querySelector('section').classList.add('none')
    }

    function showReposContent() {
        document.querySelector('.js-loading-content').classList.add('none')
        document.querySelector('header').classList.remove('none')
        document.querySelector('section').classList.remove('none')
        document.querySelector('.about-profile-content').classList.remove('none')
    }

    async function getUserInfo(api){
        return await fetch(api)
            .then(user => {
                if (user.ok) {
                    document.querySelector('.js-loading-content').classList.add('none')
                    document.querySelector('header').classList.remove('none')
                    document.querySelector('section').classList.remove('none')
                    return user.json()
                }
            })
            .then(result => showUserInfo(result))
            .catch(error => error);
    }

    async function getReposInfo(api) {
        hideReposContent()
        return await fetch(api)
            .then(repos => {
                if (repos.ok) {
                    isDataExist = !isDataExist
                    showReposContent()
                    return repos.json()
                }
            })
            .then(repos => showReposInfo(repos))
            .catch(error => error);
    }
})
