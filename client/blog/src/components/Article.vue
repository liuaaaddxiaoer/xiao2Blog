<template>
    <div class="article" ref="article">

    </div>
</template>

<script>
  var Markdown = require('markdown-it')
  import hljs from 'highlight.js';
    export default {
      name: "demo",
      mounted() {
        let md = Markdown({

          html:         false,        // Enable HTML tags in source
          xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                      // This is only for full CommonMark compatibility.
          breaks:       false,        // Convert '\n' in paragraphs into <br>
          langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                      // useful for external highlighters.
          linkify:      false,        // Autoconvert URL-like text to links

          // Enable some language-neutral replacement + quotes beautification
          typographer:  false,

          // Double + single quotes replacement pairs, when typographer enabled,
          // and smartquotes on. Could be either a String or an Array.
          //
          // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
          // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
          quotes: '“”‘’',

          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
              } catch (__) {}
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          }
        })

        let result = md.render('```objc\n' +
          'typedef struct __CFRunLoop * CFRunLoopRef;\n' +
          '```\n' +
          '\n![图片](https://file.kangzubin.com/blog/static/20190219/0.jpeg)\n'+

        ' CFRunLoopRef 是指向结构体 struct __CFRunLoop的指针类型\n' +
          '```objc\n' +
          'struct __CFRunLoop {\n' +
          '    CFRuntimeBase _base;\n' +
          '    pthread_mutex_t _lock;\t\t\t/* locked for accessing mode list */\n' +
          '    __CFPort _wakeUpPort;\t\t\t// used for CFRunLoopWakeUp \n' +
          '    Boolean _unused;\n' +
          '    volatile _per_run_data *_perRunData;              // reset for runs of the run loop\n' +
          '    pthread_t _pthread;\n' +
          '    uint32_t _winthread;\n' +
          '    CFMutableSetRef _commonModes;\n' +
          '    CFMutableSetRef _commonModeItems;\n' +
          '    CFRunLoopModeRef _currentMode;\n' +
          '    CFMutableSetRef _modes;\n' +
          '    struct _block_item *_blocks_head;\n' +
          '    struct _block_item *_blocks_tail;\n' +
          '    CFAbsoluteTime _runTime;\n' +
          '    CFAbsoluteTime _sleepTime;\n' +
          '    CFTypeRef _counterpart;\n' +
          '};\n' +
          '\n' +
          '```\n' +
          '\n' +
          '```objc\n' +
          'typedef struct __CFRunLoopSource * CFRunLoopSourceRef;\n' +
          '```\n' +
          'CFRunLoopSourceRef是指向结构体struct __CFRunLoopSource的指针类型。\n' +
          '```objc\n' +
          'struct __CFRunLoopSource {\n' +
          '    CFRuntimeBase _base;\n' +
          '    uint32_t _bits;\n' +
          '    pthread_mutex_t _lock;\n' +
          '    CFIndex _order;\t\t\t/* immutable */\n' +
          '    CFMutableBagRef _runLoops;\n' +
          '    union {\n' +
          '\tCFRunLoopSourceContext version0;\t/* immutable, except invalidation */\n' +
          '        CFRunLoopSourceContext1 version1;\t/* immutable, except invalidation */\n' +
          '    } _context;\n' +
          '};\n' +
          '\n' +
          '```\n' +
          '\n' +
          '```objc\n' +
          'typedef struct __CFRunLoopObserver * CFRunLoopObserverRef;\n' +
          '```\n' +
          'CFRunLoopObserverRef是指向结构体 struct __CFRunLoopObserver的指针类型。\n' +
          '```objc\n' +
          'struct __CFRunLoopObserver {\n' +
          '    CFRuntimeBase _base;\n' +
          '    pthread_mutex_t _lock;\n' +
          '    CFRunLoopRef _runLoop;\n' +
          '    CFIndex _rlCount;\n' +
          '    CFOptionFlags _activities;\t\t/* immutable */\n' +
          '    CFIndex _order;\t\t\t/* immutable */\n' +
          '    CFRunLoopObserverCallBack _callout;\t/* immutable */\n' +
          '    CFRunLoopObserverContext _context;\t/* immutable, except invalidation */\n' +
          '};\n' +
          '\n' +
          '```\n' +
          '\n' +
          '```objc\n' +
          'typedef struct CF_BRIDGED_MUTABLE_TYPE(NSTimer) __CFRunLoopTimer * CFRunLoopTimerRef;\n' +
          '```\n' +
          'CFRunLoopTimerRef是指向结构体 struct CF_BRIDGED_MUTABLE_TYPE(NSTimer)的指针类型。\n' +
          '```objc\n' +
          'struct __CFRunLoopTimer {\n' +
          '    CFRuntimeBase _base;\n' +
          '    uint16_t _bits;\n' +
          '    pthread_mutex_t _lock;\n' +
          '    CFRunLoopRef _runLoop;\n' +
          '    CFMutableSetRef _rlModes;\n' +
          '    CFAbsoluteTime _nextFireDate;\n' +
          '    CFTimeInterval _interval;\t\t/* immutable */\n' +
          '    CFTimeInterval _tolerance;          /* mutable */\n' +
          '    uint64_t _fireTSR;\t\t\t/* TSR units */\n' +
          '    CFIndex _order;\t\t\t/* immutable */\n' +
          '    CFRunLoopTimerCallBack _callout;\t/* immutable */\n' +
          '    CFRunLoopTimerContext _context;\t/* immutable, except invalidation */\n' +
          '};\n' +
          '\n' +
          '```\n' +
          '\n' +
          '另外runloop.c中还有另外一个结构体指针。\n' +
          '```objc\n' +
          'typedef struct __CFRunLoopMode *CFRunLoopModeRef;\n' +
          '```\n' +
          'CFRunLoopModeRef是指向结构体struct __CFRunLoopMode的指针类型\n' +
          '```objc\n' +
          'struct __CFRunLoopMode {\n' +
          '    CFRuntimeBase _base;\n' +
          '    pthread_mutex_t _lock;\t/* must have the run loop locked before locking this */\n' +
          '    CFStringRef _name;\n' +
          '    Boolean _stopped;\n' +
          '    char _padding[3];\n' +
          '    CFMutableSetRef _sources0;\n' +
          '    CFMutableSetRef _sources1;\n' +
          '    CFMutableArrayRef _observers;\n' +
          '    CFMutableArrayRef _timers;\n' +
          '    CFMutableDictionaryRef _portToV1SourceMap;\n' +
          '    __CFPortSet _portSet;\n' +
          '    CFIndex _observerMask;\n' +
          '#if USE_DISPATCH_SOURCE_FOR_TIMERS\n' +
          '    dispatch_source_t _timerSource;\n' +
          '    dispatch_queue_t _queue;\n' +
          '    Boolean _timerFired; // set to true by the source when a timer has fired\n' +
          '    Boolean _dispatchTimerArmed;\n' +
          '#endif\n' +
          '#if USE_MK_TIMER_TOO\n' +
          '    mach_port_t _timerPort;\n' +
          '    Boolean _mkTimerArmed;\n' +
          '#endif\n' +
          '#if DEPLOYMENT_TARGET_WINDOWS\n' +
          '    DWORD _msgQMask;\n' +
          '    void (*_msgPump)(void);\n' +
          '#endif\n' +
          '    uint64_t _timerSoftDeadline; /* TSR */\n' +
          '    uint64_t _timerHardDeadline; /* TSR */\n' +
          '};\n' +
          '\n' +
          '```')


        let refOk = this.$refs.article
        refOk.innerHTML = result

      },
    }
</script>

<style lang="less">
  @import '../../node_modules/highlight.js/styles/vs2015.css';
  .article {
    text-align: left;
    img {
      width: 100%;
      max-height: 400px;
      margin: 10px 0;
    }

    img::selection {
      background: lightblue;
    }

    p {
      font-weight: 500;
      padding: 5px 0;
    }
  }


</style>
