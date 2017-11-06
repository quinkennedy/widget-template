cpdefine("inline:com-chilipeppr-widget-workspace-list", ["chilipeppr_ready"], function() {
  return {
    /**
     * The ID of the widget. You must define this and make it unique.
     */
    id: "com-chilipeppr-widget-workspace-list", // Make the id the same as the cpdefine id
    name: "List of default workspaces available", // The descriptive name of your widget.
    desc: "Shows all the workspaces available without logging in.", // A description of what your widget does
    url: "https://raw.githubusercontent.com/quinkennedy/widget-workspace-list/master/auto-generated-widget.html", // The final URL of the working widget as a single HTML file with CSS and Javascript inlined. You can let runme.js auto fill this if you are using Cloud9.
    githuburl: "https://github.com/quinkennedy/widget-workspace-list", // The backing github repo
    /**
     * Define pubsub signals below. These are basically ChiliPeppr's event system.
     * ChiliPeppr uses amplify.js's pubsub system so please refer to docs at
     * http://amplifyjs.com/api/pubsub/
     */
    /**
     * Define the publish signals that this widget/element owns or defines so that
     * other widgets know how to subscribe to them and what they do.
     */
    publish: {
      // Define a key:value pair here as strings to document what signals you publish.
    },
    /**
     * Define the subscribe signals that this widget/element owns or defines so that
     * other widgets know how to subscribe to them and what they do.
     */
    subscribe: {
      // Define a key:value pair here as strings to document what signals you subscribe to
      // so other widgets can publish to this widget to have it do something.
      // '/onExampleConsume': 'Example: This widget subscribe to this signal so other widgets can send to us and we'll do something with it.'
    },
    /**
     * Document the foreign publish signals, i.e. signals owned by other widgets
     * or elements, that this widget/element publishes to.
     */
    foreignPublish: {
      // Define a key:value pair here as strings to document what signals you publish to
      // that are owned by foreign/other widgets.
      // '/jsonSend': 'Example: We send Gcode to the serial port widget to do stuff with the CNC controller.'
    },
    /**
     * Document the foreign subscribe signals, i.e. signals owned by other widgets
     * or elements, that this widget/element subscribes to.
     */
    foreignSubscribe: {
      // Define a key:value pair here as strings to document what signals you subscribe to
      // that are owned by foreign/other widgets.
      // '/com-chilipeppr-elem-dragdrop/ondropped': 'Example: We subscribe to this signal at a higher priority to intercept the signal. We do not let it propagate by returning false.'
    },
    /**
     * All widgets should have an init method. It should be run by the
     * instantiating code like a workspace or a different widget.
     */
    init: function() {
      console.log("I am being initted. Thanks.");

      this.btnSetup();
      this.loadWksp();

      console.log("I am done being initted.");
    },
    /**
     * Call this method from init to setup all the buttons when this widget
     * is first loaded. This basically attaches click events to your
     * buttons. It also turns on all the bootstrap popovers by scanning
     * the entire DOM of the widget.
     */
    btnSetup: function() {
      // Button to expand
      $('#com-chilipeppr-wspicker-toggle-btn').click(function() {
        $('#com-chilipeppr-wspicker-collapsed').addClass('hidden');
        $('#com-chilipeppr-wspicker-expanded').removeClass('hidden');
        // reset classes in main workspace area to make room for us
        // make the main workspace area only take up 8 cols instead of 12
        $('#pnlWorkspace').removeClass('col-xs-12');
        $('#pnlWorkspace').removeClass('pnlWorkspaceRtSidebarCollapsed');
        $('#pnlWorkspace').addClass('pnlWorkspaceRtSidebarExpanded');
        $('#pnlWorkspace').addClass('col-xs-8');
        // show the right sidebar area and make it use 4 cols
        //$('#pnlRtSidebar').removeClass('hidden');
        $('#pnlRtSidebar').addClass('col-xs-4');
      });
      // Button to re-collapse
      $('#com-chilipeppr-wspicker-toggle-btn-rt').click(function() {
        $('#com-chilipeppr-wspicker-collapsed').removeClass('hidden');
        $('#com-chilipeppr-wspicker-expanded').addClass('hidden');
        // reset classes in main workspace area to make room for us
        // make the main workspace area only take up 8 cols instead of 12
        $('#pnlWorkspace').addClass('col-xs-12');
        $('#pnlWorkspace').addClass('pnlWorkspaceRtSidebarCollapsed');
        $('#pnlWorkspace').removeClass('pnlWorkspaceRtSidebarExpanded');
        $('#pnlWorkspace').removeClass('col-xs-8');
        // show the right sidebar area and make it use 4 cols
        //$('#pnlRtSidebar').addClass('hidden');
        $('#pnlRtSidebar').removeClass('col-xs-4');
      });
    },
    loadWksp: function() {


      chilipeppr.load("#com-chilipeppr-wsgrid-terminal",
        "http://raw.githubusercontent.com/chilipeppr/workspace-terminal/master/auto-generated-workspace.html",
        function() {
          $('#com-chilipeppr-workspace-terminal-billboard').removeClass("hidden");
          $('#com-chilipeppr-workspace-terminal').remove();


        });

      chilipeppr.load("#com-chilipeppr-wsgrid-nodemcu",
        "http://raw.githubusercontent.com/chilipeppr/workspace-nodemcu/master/auto-generated-workspace.html",
        function() {
          $('#com-chilipeppr-workspace-nodemcu-billboard').removeClass("hidden");
          $('#com-chilipeppr-workspace-nodemcu').remove();

        });
    }
  }
});
