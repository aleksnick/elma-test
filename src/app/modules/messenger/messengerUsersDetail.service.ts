import { _ } from 'underscore';
import { Injectable } from '@angular/core';

@Injectable()

export class MessengerUsersDetailService {

    constructor(){}
    
    getDataByUserId = function(user_id: number) {

        var data = this.getDataFromServer();
        return _.findWhere(data, {'user_id': user_id});

    };

    getDataFromServer = function() {
        return [
            {
                user_id: 1,
                name: 'Jacob',
                nickname: '@Jacob',
                age: 23,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 12,
                sales: 970
            },
            {
                user_id: 2,
                name: 'Michael',
                nickname: '@Michael',
                age: 24,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 13,
                sales: 970
            },
            {
                user_id: 3,
                name: 'Madison',
                nickname: '@Madison',
                age: 25,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 32,
                sales: 970
            },
            {
                user_id: 4,
                name: 'Nathan',
                nickname: '@Nathan',
                age: 26,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 53,
                sales: 970
            },
            {
                user_id: 5,
                name: 'Alex',
                nickname: '@Alex',
                age: 18,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 34,
                sales: 970
            },
            {
                user_id: 6,
                name: 'Connor',
                nickname: '@Connor',
                age: 24,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 54,
                sales: 970
            },
            {
                user_id: 7,
                name: 'Makayla',
                nickname: '@Makayla',
                age: 23,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 43,
                sales: 970
            },
            {
                user_id: 8,
                name: 'Paige',
                nickname: '@Paige',
                age: 26,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 54,
                sales: 970
            },
            {
                user_id: 9,
                name: 'Jayden',
                nickname: '@Jayden',
                age: 28,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 34,
                sales: 970
            },
            {
                user_id: 10,
                name: 'Colin',
                nickname: '@Colin',
                age: 27,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 54,
                sales: 970
            },
            {
                user_id: 11,
                name: 'Evelyn',
                nickname: '@Evelyn',
                age: 26,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 34,
                sales: 970
            },
            {
                user_id: 12,
                name: 'Seth',
                nickname: '@Seth',
                age: 25,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 54,
                sales: 970
            },
            {
                user_id: 13,
                name: 'Diana',
                nickname: '@Diana',
                age: 23,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 34,
                sales: 970
            },
            {
                user_id: 14,
                name: 'Antonio',
                nickname: '@Antonio',
                age: 28,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 54,
                sales: 970
            },
            {
                user_id: 15,
                name: 'Allison',
                nickname: '@Allison',
                age: 27,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 23,
                sales: 970
            },
            {
                user_id: 16,
                name: 'Thomas',
                nickname: '@Thomas',
                age: 22,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 43,
                sales: 970
            },
            {
                user_id: 17,
                name: 'Isaiah',
                nickname: '@Jacob',
                age: 24,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 23,
                sales: 970
            },
            {
                user_id: 18,
                name: 'Jacob',
                nickname: '@Jacob',
                age: 24,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 21,
                sales: 970
            },
            {
                user_id: 19,
                name: 'Maria',
                nickname: '@Jacob',
                age: 25,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 65,
                sales: 970
            },
            {
                user_id: 20,
                name: 'Kylie',
                nickname: '@Jacob',
                age: 26,
                job: 'Web Designer',
                company: 'Elma',
                groups: 12,
                friends: 32,
                photos: 43,
                followers: 120,
                projects: 34,
                sales: 970
            }
        ]
    };

}


