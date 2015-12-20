var container, stats;
var camera, scene, renderer, group, particle;
var mouseX = 0, mouseY = 0;
var diam = 400;

//var windowHalfX = window.innerWidth / 2;
//var windowHalfY = window.innerHeight / 2;
var windowHalfX = 200;
var windowHalfY = 200;

      init();
      animate();

      function init() {



        //container = document.createElement( 'div' );
        container = document.getElementById("circle")
        //document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, 400 / 400, 1, 3000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();


        var PI2 = Math.PI * 2;
        var program = function ( context ) {

          context.beginPath();
          context.arc( 0, 0, 0.5, 0, PI2, true );
          context.fill();

        };
        var text, material, plane;

        text = THREE.ImageUtils.loadTexture( "img/logo.gif" );

        // assuming you want the texture to repeat in both directions:
        //text.wrapS = THREE.RepeatWrapping;
        //text.wrapT = THREE.RepeatWrapping;

        // how many times to repeat in each direction; the default is (1,1),
        //   which is probably why your example wasn't working
        //text.repeat.set( 4, 4 );

        material = new THREE.MeshLambertMaterial({ map : text });
        material.overdraw = true;
        plane = new THREE.Mesh(new THREE.PlaneGeometry(512, 512), material);
        plane.material.side = THREE.DoubleSide;
        plane.position.x = 0;
        plane.scale.x = 1;
        plane.scale.y = 1;

        // rotation.z is rotation around the z-axis, measured in radians (rather than degrees)
        // Math.PI = 180 degrees, Math.PI / 2 = 90 degrees, etc.
        //plane.rotation.z = Math.PI / 2;

        //scene.add(plane);
        group = new THREE.Group();
        group2 = new THREE.Group();
        //scene.add( group );

        group2.add(plane);
        group2.add(group);
        scene.add( group2 );
        //group2.scale.x = 0.3;
        //group2.scale.y = 0.3;
        //group2.scale.z = 0.3;


        for ( var i = 0; i < 50; i++ ) {

          var material = new THREE.SpriteCanvasMaterial( {
            color: 0xFFFFFF,
            opacity: 1,
            program: program
          } );

          particle = new THREE.Sprite( material );


          var alpha = Math.random() * Math.PI * 2;
          var omega = Math.random() *  Math.PI * 2;


          particle.position.x = diam * Math.cos(alpha) * Math.cos(omega);
          particle.position.y = diam * Math.cos(alpha) * Math.sin(omega);
          particle.position.z = diam * Math.sin(alpha) ;
          particle.scale.x = particle.scale.y = Math.random() * 6 + 3;
          group.add( particle );
        }

        // test particle class

        for ( var i = 0; i <200; i++ ) {

        var material_particles = new THREE.SpriteCanvasMaterial( {
            color: 0xFFFFFF,
            opacity: 1,
            program: program
          } );
          var alpha = Math.random() * Math.PI * 2;
          var omega = Math.random() *  Math.PI * 2;

          particle.px = diam * Math.cos(alpha) * Math.cos(omega);
          particle.py = diam * Math.cos(alpha) * Math.sin(omega);
          particle.pz = diam * Math.sin(alpha) ;

          particle = new THREE.Sprite( material_particles );
          particle.scale.x = particle.scale.y = Math.random() * 8 + 4;
          initParticle( particle, i * 10 );
          group.add( particle );
        }

        //renderer

        renderer = new THREE.CanvasRenderer({ alpha: true, antialias: true });
        //renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        //renderer.autoClear = true;
        //renderer.setClearColorHex(0x00FF00, 1)
       // renderer.setClearColorHex( 0xffffff, 1 );
        //renderer.setClearColorHex( 0x2a3c4c, 0 );
        //renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setPixelRatio( window.devicePixelRatio );
        //renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setSize( 400, 400 );
        document.getElementById("circle").appendChild( renderer.domElement );
        /*
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );
        */
        //document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        //document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        //document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        window.addEventListener( 'resize', onWindowResize, false );

      }

      function initParticle( particle, delay ) {

        var particle = this instanceof THREE.Sprite ? this : particle;
        var delay = Math.random()*8000 + 2;
        var duree = 600;//speed of dot from one side to the other
        //particle.position.set( 0, 0, 0 );
          var alpha = Math.random() * Math.PI * 2;
          var omega = Math.random() *  Math.PI * 2;
          particle.position.x = diam * Math.cos(alpha) * Math.cos(omega);
          particle.position.y = diam * Math.cos(alpha) * Math.sin(omega);
          particle.position.z = diam * Math.sin(alpha) ;
          particle.opacity = 1;

        new TWEEN.Tween( particle )
          .delay( delay )
          .to( { }, 1000 )
          .onComplete( initParticle )
          .start();

        new TWEEN.Tween( particle.position )
          .delay( delay )
          .to( {  x: this.px, y: this.py, z: this.pz }, duree )
          .start();

        new TWEEN.Tween( particle )
          .delay( 100 )
          .to( {  opacity: 0 }, 200 )
          .start();



      }
      function onWindowResize() {

        windowHalfX = 400 / 2;
        windowHalfY = 400 / 2;

        camera.aspect = 400 / 400;
        camera.updateProjectionMatrix();

        renderer.setSize( 400, 400 );

      }

      //

      function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      }

      function onDocumentTouchStart( event ) {

        if ( event.touches.length === 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      function onDocumentTouchMove( event ) {

        if ( event.touches.length === 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      //

      function animate() {

        requestAnimationFrame( animate );

        render();
        //stats.update();

      }

      function render() {

        TWEEN.update();
        camera.position.x += ( mouseX - camera.position.x ) * 0.015;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.015;
        camera.lookAt( scene.position );


        //group.rotation.x += 0.001;
        group.rotation.y += 0.005;
        //renderer.clear();
        renderer.render( scene, camera );

      }
