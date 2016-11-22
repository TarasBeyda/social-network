angular.module('Controllers',[])
.controller('regCheckUsersCtrl', regCheckUsersCtrl)
.controller('usersPageCTRL', usersPageCTRL)
regCheckUsersCtrl.$inject=['regCheckUsers'];
usersPageCTRL.$inject=['regCheckUsers'];
function regCheckUsersCtrl(regCheckUsers){
    this.usersObjs = regCheckUsers.usersObjs;
    this.regPush = regCheckUsers.regPush;
    this.clear = regCheckUsers.clear;

    this.usersCheck = function(){
        for (var i=0; i<this.usersObjs.length; i++) {
            if (this.emailEntr == JSON.parse(JSON.stringify(this.usersObjs[i])).email && this.passEntr == JSON.parse(JSON.stringify(this.usersObjs[i])).pass) {
                regCheckUsers.idUsers = i;
                this.idUsers = regCheckUsers.idUsers;
                $('#user__page').attr('href', '#/userPage');
                console.log(regCheckUsers.idUsers);
            }
        }
    };

    this.clickBtnReg = function(){
        this.clear();
    };

    this.register = function(){
        this.regPush();
    };

    this.clickBtnCancel = function(){
        this.clear();
    };

    this.clickBtnLogout = function () {
        this.clear();
    };
}
function usersPageCTRL(regCheckUsers) {
    this.usersObjs = regCheckUsers.usersObjs;
    this.idUsers = regCheckUsers.idUsers;
    this.clickAddFriendObj = regCheckUsers.clickAddFriendObj;
    this.copyUsersObjs = regCheckUsers.copyUsersObjs;
    this.addNewInfUser = regCheckUsers.addNewInfUser;
    this.tmppath = regCheckUsers.tmppath;

    this.aaa = function () {
        $('#avatars').css('background', 'url('+this.usersObjs[this.idUsers].avatars+') center center');
        $('#avatars').css('background-size', 'cover');
    };
    this.aaa();

    this.addNewInfUser();
    this.avatarsChange = function(event) {
        $('.change__avatars').on('change', function(){
            regCheckUsers.tmppath = URL.createObjectURL(event.target.files[0]);
            this.tmppath = regCheckUsers.tmppath;
            this.idUsers = regCheckUsers.idUsers;
            this.usersObjs = regCheckUsers.usersObjs;
            this.copyUsersObjs = regCheckUsers.copyUsersObjs;
            this.usersObjs.splice(this.idUsers, 1, {
                name: this.copyUsersObjs[this.idUsers].name,
                sname: this.copyUsersObjs[this.idUsers].sname,
                email: this.copyUsersObjs[this.idUsers].email,
                pass: this.copyUsersObjs[this.idUsers].pass,
                avatars: this.tmppath,
                phone: this.copyUsersObjs[this.idUsers].phone,
                country:this.copyUsersObjs[this.idUsers].country,
                city: this.copyUsersObjs[this.idUsers].city,
                skype: this.copyUsersObjs[this.idUsers].skype,
                github: this.copyUsersObjs[this.idUsers].github,
                description: this.copyUsersObjs[this.idUsers].description,
                posts: this.copyUsersObjs[this.idUsers].posts,
                friends: this.copyUsersObjs[this.idUsers].friends
            });
            this.aaa = function () {
                $('#avatars').css('background', 'url('+this.usersObjs[this.idUsers].avatars+') center center');
                $('#avatars').css('background-size', 'cover');

            };
            this.aaa();
            // $('img[alt="avatars"]').attr('src', regCheckUsers.usersObjs[regCheckUsers.idUsers].avatars);
            // console.log(regCheckUsers.usersObjs[regCheckUsers.idUsers].avatars);
        })
    };

    this.postNews = function () {
        console.log(this.post__input);
        this.usersObjs[this.idUsers].posts.unshift({
            data: this.postTarea,
            data2: this.post__input,
            date: new Date()
        });
        console.log(this.usersObjs);
        this.postTarea = '';
        this.post__input = '';
    };
    this.clickSaveInf = function () {
         this.usersObjs.splice(this.idUsers, 1, {
             name: this.copyUsersObjs[this.idUsers].name,
             sname: this.copyUsersObjs[this.idUsers].sname,
             email: this.copyUsersObjs[this.idUsers].email,
             pass: this.copyUsersObjs[this.idUsers].pass,
             avatars: this.copyUsersObjs[this.idUsers].avatars,
             phone: this.user__phone,
             country: this.user__country,
             city: this.user__city,
             skype: this.user__skype,
             github: this.user__GitHub,
             description: this.user__disc,
             posts: this.copyUsersObjs[regCheckUsers.idUsers].posts,
             friends: this.copyUsersObjs[this.idUsers].friends
         });
         console.log(this.usersObjs);
    };





    // this.addFriends = function (key) {
    //     regCheckUsers.indexAddFriends = this.usersObjs.indexOf(key);
    //     this.usersObjs[this.idUsers].friends.push({
    //         name: this.usersObjs[regCheckUsers.indexAddFriends].name,
    //         sname: this.usersObjs[regCheckUsers.indexAddFriends].sname,
    //         avatars: this.usersObjs[regCheckUsers.indexAddFriends].avatars
    //     });
    //     $('.btn__plus__add').eq(regCheckUsers.indexAddFriends).hide();
    // };
    //
    // this.removeFriends = function (key) {
    //     regCheckUsers.indexDeleteFriends = this.usersObjs.indexOf(key);
    //     this.usersObjs[this.idUsers].friends.splice(regCheckUsers.indexDeleteFriend, 1);
    //     $('.btn__plus__add').eq(regCheckUsers.indexAddFriends).show();
    // };




    this.addFriends = function (key) {
        regCheckUsers.indexAddFriends = this.usersObjs.indexOf(key);
        this.usersObjs[this.idUsers].friends.unshift({
            name: this.usersObjs[regCheckUsers.indexAddFriends].name,
            sname: this.usersObjs[regCheckUsers.indexAddFriends].sname,
            avatars: this.usersObjs[regCheckUsers.indexAddFriends].avatars,
            number: regCheckUsers.indexAddFriends
        });
        console.log(this.usersObjs[this.idUsers]);
        $('.add').eq(regCheckUsers.indexAddFriends).hide();
    };
    this.removeFriends = function (key) {
        regCheckUsers.indexDeleteFriends = this.usersObjs[this.idUsers].friends.indexOf(key);
        this.friendsNumberRemove = this.usersObjs[this.idUsers].friends[regCheckUsers.indexDeleteFriends].number;
        this.usersObjs[this.idUsers].friends.splice(regCheckUsers.indexDeleteFriends, 1);
        $('.add').eq(this.friendsNumberRemove).show();
    };




    this.amountClickAddFriend = function () {
        console.log(regCheckUsers.idUsers);
        $('#modal__add__friend li').eq(this.idUsers).hide();
    };

    this.searchVisible = function () {
        if ($('#search__block').hasClass('true')) {
            $('#modal__add__friend').animate({
                'min-height': '0px',
                height: '0px',
                'border-width': 0
            }, 500, function () {
                $('#search__block').animate({
                    opacity: 0,
                    width: '0px'
                }, 700);
                $('#search__block').animate({
                    top: '-20px'
                }, 10);
                $('#search__block').removeClass('true');
            } );
        } else {
            $('#search__block').animate({
                top: '9px'
            }, 10);
            $('#search__block').animate({
                opacity: 1,
                width: '202px'
            }, 700);
            $('#search__block').addClass('true');
        }
    };

    this.clickSearchVisible = function () {
        this.amountClickAddFriend();
        $('#modal__add__friend').animate({
            'min-height': '170px',
            'max-height': '260px',
            'border-width': '3px'
        }, 800);
    };

    this.avatarsMMouseOver = function () {
        $('.change__avatars__zindex_2').animate({
            opacity: 0.8
        }, 100);
    };
    this.avatarsReturnMouseOver = function () {
        $('.change__avatars__zindex_2').animate({
            opacity: 0
        }, 100);
    };
}
