import { _ } from 'underscore';
import { Injectable } from '@angular/core';

@Injectable()

export class MessengerChatService {

    constructor(){}  

    getDataByChatId = function(chat_id: number) {

        var data = this.getDataFromServer();
        return _.findWhere(data, {'chat_id': chat_id});

    };    

    getDataFromServer = function() {
        return [
            {
                chat_id: 1,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi, me',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hi hi!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 2,
                history: [
                    {
                        date: 'yesterday, 12:12',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:22',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'what???',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 3,
                history: [
                    {
                        date: 'yestarday, 8:14',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 4,
                history: [
                    {
                        date: 'yesterday, 9:25',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 5,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 18:27',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 6,
                history: [
                    {
                        date: 'yesterday, 12:42',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 22:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 7,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 8,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 9,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 10,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 11,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 12,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 13,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 14,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 15,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 16,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 17,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 18,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 19,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            },
            {
                chat_id: 20,
                history: [
                    {
                        date: 'yesterday, 12:02',
                        messages: [
                            {
                                author: 'user',
                                msg: 'Hi',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'Hello!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'yestarday, 14:24',
                        messages: [
                            {
                                author: 'user',
                                msg: 'how are you?',
                                isNew: false
                            },
                            {
                                autor: 'you',
                                msg: 'fine, thanks!',
                                isNew: false
                            }
                        ]
                    },
                    {
                        date: 'today',
                        messages: [
                            {
                                author: 'user',
                                msg: 'what are you doing?',
                                isNew: false
                            },
                            {
                                author: 'me',
                                msg: 'nothing',
                                isNew: false
                            }
                        ]
                    }
                ]
            }
        ]
    };

}


