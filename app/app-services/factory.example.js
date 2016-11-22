angular.module('factorySocial',[])
    .factory('regCheckUsers', function(){
        var usersObjs = [
            {
                name: 'Taras',
                sname: 'Beyda',
                email: 'tarasbeyda@gmail.com',
                pass: '1857',
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            },
            {
                name: 'aaaa',
                sname: 'aaaa',
                email: 'q@q',
                pass: '1857',
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            },
            {
                name: 'bbb',
                sname: 'bbb',
                email: 'w@w',
                pass: '1857',
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            },
            {
                name: 'dddd',
                sname: 'dddd',
                email: 'e@e',
                pass: '1857',
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            },
            {
                name: 'hjhhh',
                sname: 'hjhhh',
                email: 'r@r',
                pass: '1857',
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            },
            {
                name: 'bfgbgbg',
                sname: 'bfgbgbg',
                email: 't@t',
                pass: '1857',
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            },

        ];
        var copyUsersObjs = usersObjs;
        function addNewInfUser() {
            this.user__phone = this.copyUsersObjs[this.idUsers].phone;
            this.user__country = this.copyUsersObjs[this.idUsers].country;
            this.user__city = this.copyUsersObjs[this.idUsers].city;
            this.user__skype = this.copyUsersObjs[this.idUsers].skype;
            this.user__GitHub = this.copyUsersObjs[this.idUsers].github;
            this.user__disc = this.copyUsersObjs[this.idUsers].description;
        };
        function regPush(){
            usersObjs.push({
                name: this.name,
                sname: this.surname,
                email: this.email,
                pass: this.pass,
                avatars: 'src/img/default__users.png',
                phone: '',
                country: '',
                city: '',
                skype: '',
                github: '',
                description: '',
                posts: [],
                friends: []
            });
            for (var i=0; i<usersObjs.length; i++) {
                localStorage.setItem('user'+i, JSON.stringify(usersObjs[i]));
            }
            return usersObjs;
        };
        function clear(){
            this.emailEntr = '';
            this.passEntr = '';
            this.name = '';
            this.surname = '';
            this.email = '';
            this.pass = '';
        };
        return {
            regPush: regPush,
            usersObjs: usersObjs,
            clear: clear,
            idUsers: '',
            copyUsersObjs: copyUsersObjs,
            addNewInfUser: addNewInfUser,
            tmppath: '',
            indexAddFriends: '',
            indexDeleteFriends: ''
        };
    });