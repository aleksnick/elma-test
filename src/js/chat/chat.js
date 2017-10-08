


window.readyChat = function() {
    var chatHeight          = 550; // Default chat container height in large screens
    var chatHeightSmall     = 300; // Default chat components (talk & people) height in small screens

    /* Cache some often used variables */
    var chatCon             = $(document).find('.chatui-container');
    var chatTalk            = $(document).find('.chatui-talk');
    var chatTalkScroll      = $(document).find('.chatui-talk-scroll');

    var chatPeople          = $(document).find('.chatui-people');
    var chatPeopleScroll    = $(document).find('.chatui-people-scroll');

    var chatInput           = $(document).find('.chatui-input');
    var chatMsg             = '';

    /* Updates chat UI components height */
    var updateChatHeight = function(){
        var windowW = window.innerWidth
                        || document.documentElement.clientWidth
                        || document.body.clientWidth;

        if (windowW < 768) { // On small screens
            chatCon
                .css('height', (chatHeightSmall * 2) + chatInput.outerHeight());

            chatTalk
                .add(chatTalkScroll)
                .add(chatTalkScroll.parent())
                .add(chatPeople)
                .add(chatPeopleScroll)
                .add(chatPeopleScroll.parent())
                .css('height', chatHeightSmall);
        }
        else if (windowW > 767) { // On large screens
            chatCon
                .css('height', chatHeight);

            chatTalk
                .add(chatTalkScroll)
                .add(chatTalkScroll.parent())
                .css('height', chatHeight - chatInput.outerHeight());

            chatPeople
                .add(chatPeopleScroll)
                .add(chatPeopleScroll.parent())
                .css('height', chatHeight);
        }
    };

    return {
        init: function() {
            // Initialize default chat height
            updateChatHeight();

            // Update chat UI components height on window resize
            $(window).resize(function(){ updateChatHeight(); });

            // Initialize scrolling on chat talk + people
            chatTalkScroll
                .slimScroll({
                    height: chatTalk.outerHeight(),
                    color: '#000',
                    size: '3px',
                    position: 'right',
                    touchScrollStep: 100
                });

            chatPeopleScroll
                .slimScroll({
                    height: chatPeople.outerHeight(),
                    color: '#fff',
                    size: '3px',
                    position: 'right',
                    touchScrollStep: 100
                });

        }
    };
}();

$(document).ready(function() {

    window.readyChat.init(); 

    $(document).on('chatui__submit', function() {
        setTimeout(function() {
            var $chatTalkScroll = $(document).find('.chatui-talk-scroll');
            var $chatTalkScrollUl = $chatTalkScroll.find('ul');
            $chatTalkScroll.slimScroll({ scrollTo: $chatTalkScrollUl.height() });
            console.log('$chatTalkScrollUl.height()', $chatTalkScrollUl.height());
        }, 100);        
    });

    $(document).on('click', '.routerLinkUser', function() {
        $('html, body').animate({
          scrollTop: 0
        }, 300,);
    });


});

