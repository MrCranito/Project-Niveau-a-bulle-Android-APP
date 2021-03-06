/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById("button_vibreur").addEventListener("click", vibration);
        document.getElementById("button_vibreur").addEventListener("click", playSound);

        function vibration() {
                           var time = [1000,1500,2000];
                           navigator.vibrate(time);
                        }
        function playSound(){
                         var media = new Media("/android_asset/www/Sound/1051.mp3", null);
                        media.play();
                           }

        function onSuccess(acceleration) {
                    console.log(acceleration.x);
                    // $('#x').html(''+acceleration.x+'');
                    var my_acceleration_int = parseInt(acceleration.x,10);
                    var my_acceleration_int_y = parseInt(acceleration.y,10);
                    var my_acceleration_int_z = parseInt(acceleration.z,10);
                    $('#x').html('My X: '+my_acceleration_int+'');
                    $('#y').html('My Y: '+my_acceleration_int_y+'');
                    $('#z').html('My Z: '+my_acceleration_int_z+'');
                    var abs_x = Math.abs(acceleration.x);
                    var abs_y = Math.abs(acceleration.y);
                    var abs_z = Math.abs(acceleration.z);
                  
                    $('#point_x').css({top:130 - acceleration.x*14.7});
                
                    $('#point_y').css({top:130 - acceleration.y*12});
                
                    $('#point_z').css({top:335 - acceleration.y *9,left:125 + acceleration.x*9});
                   
                   
                    

                    

                     // 'Acceleration Y: ' + acceleration.y + '\n' +
                       //   'Acceleration Z: ' + acceleration.z + '\n' +
                         // 'Timestamp: '      + acceleration.timestamp + '\n');
                }

                function onError() {
                    alert('onError!');
                }

                var options = { frequency: 40 };  // Update every 3 seconds

                var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },



};

app.initialize();