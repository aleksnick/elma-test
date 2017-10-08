import { _ } from 'underscore';
import { Injectable } from '@angular/core';

@Injectable()

export class MessengerUsersService {

    constructor(){}
    
    getDataByUserId = function(id: number) {

        var data = this.getDataFromServer();
        return _.findWhere(data, {'id': id});

    };

    getDataByUserStatus = function(status: string) {

        var data = this.getDataFromServer();
        return _.where(data, {'status': status});

    }

    getDataFromServer = function() {
        return [
            {
                id: 1,
                name: 'Jacob',
                age: 23,
                job: 'Web Designer',
                followers: 120,
                projects: 12,
                sales: 970,
                status: 'busy'
            },
            {
                id: 2,
                name: 'Michael',
                age: 24,
                job: 'Web Designer',
                followers: 120,
                projects: 13,
                sales: 970,
                status: 'away'
            },
            {
                id: 3,
                name: 'Madison',
                age: 25,
                job: 'Web Designer',
                followers: 120,
                projects: 32,
                sales: 970,
                status: 'offline'
            },
            {
                id: 4,
                name: 'Nathan',
                age: 26,
                job: 'Web Designer',
                followers: 120,
                projects: 53,
                sales: 970,
                status: 'online'
            },
            {
                id: 5,
                name: 'Alex',
                age: 18,
                job: 'Web Designer',
                followers: 120,
                projects: 34,
                sales: 970,
                status: 'online'
            },
            {
                id: 6,
                name: 'Connor',
                age: 24,
                job: 'Web Designer',
                followers: 120,
                projects: 54,
                sales: 970,
                status: 'online'
            },
            {
                id: 7,
                name: 'Makayla',
                age: 23,
                job: 'Web Designer',
                followers: 120,
                projects: 43,
                sales: 970,
                status: 'away'
            },
            {
                id: 8,
                name: 'Paige',
                age: 26,
                job: 'Web Designer',
                followers: 120,
                projects: 54,
                sales: 970,
                status: 'away'
            },
            {
                id: 9,
                name: 'Jayden',
                age: 28,
                job: 'Web Designer',
                followers: 120,
                projects: 34,
                sales: 970,
                status: 'away'
            },
            {
                id: 10,
                name: 'Colin',
                age: 27,
                job: 'Web Designer',
                followers: 120,
                projects: 54,
                sales: 970,
                status: 'away'
            },
            {
                id: 11,
                name: 'Evelyn',
                age: 26,
                job: 'Web Designer',
                followers: 120,
                projects: 34,
                sales: 970,
                status: 'away'
            },
            {
                id: 12,
                name: 'Seth',
                age: 25,
                job: 'Web Designer',
                followers: 120,
                projects: 54,
                sales: 970,
                status: 'away'
            },
            {
                id: 13,
                name: 'Diana',
                age: 23,
                job: 'Web Designer',
                followers: 120,
                projects: 34,
                sales: 970,
                status: 'offline'
            },
            {
                id: 14,
                name: 'Antonio',
                age: 28,
                job: 'Web Designer',
                followers: 120,
                projects: 54,
                sales: 970,
                status: 'offline'
            },
            {
                id: 15,
                name: 'Allison',
                age: 27,
                job: 'Web Designer',
                followers: 120,
                projects: 23,
                sales: 970,
                status: 'busy'
            },
            {
                id: 16,
                name: 'Thomas',
                age: 22,
                job: 'Web Designer',
                followers: 120,
                projects: 43,
                sales: 970,
                status: 'online'
            },
            {
                id: 17,
                name: 'Isaiah',
                age: 24,
                job: 'Web Designer',
                followers: 120,
                projects: 23,
                sales: 970,
                status: 'offline'
            },
            {
                id: 18,
                name: 'Jacob',
                age: 24,
                job: 'Web Designer',
                followers: 120,
                projects: 21,
                sales: 970,
                status: 'offline'
            },
            {
                id: 19,
                name: 'Maria',
                age: 25,
                job: 'Web Designer',
                followers: 120,
                projects: 65,
                sales: 970,
                status: 'offline'
            },
            {
                id: 20,
                name: 'Kylie',
                age: 26,
                job: 'Web Designer',
                followers: 120,
                projects: 34,
                sales: 970,
                status: 'offline'
            }
        ]
    };

}


