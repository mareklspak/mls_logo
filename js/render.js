            var sexagon = [
            {"x":0,"y":1},
            {"x":0.866025403784,"y":0.5},
            {"x":0.866025403784,"y":-0.5},
            {"x":0,"y":-1},
            {"x":-0.866025403784,"y":-0.5},
            {"x":-0.866025403784,"y":0.5}
            ];

            var arrow = [
            {"x":0.866025403784,"y":0.7},
            {"x":0,"y":1.2},
            {"x":-0.866025403784,"y":0.7},
            {"x":-0.866025403784,"y":1},
            {"x":0,"y":1.5},
            {"x":0.866025403784,"y":1}
            ];

            var letterM = [
            {"x":-0.4409680113,"y":-0.1172839},
            {"x":-0.3383030768,"y":-0.1172839},
            {"x":-0.2557161625,"y":0.165},
            {"x":-0.1731292483,"y":-0.1172839},
            {"x":-0.0659183896,"y":-0.1172839},
            {"x":-0.0659183896,"y":0.2654322},
            {"x":-0.1422650507,"y":0.2654322},
            {"x":-0.1422650507,"y":-0.05555550494},
            {"x":-0.2310248045,"y":0.2654322},
            {"x":-0.2804075206,"y":0.2654322},
            {"x":-0.3691672743,"y":-0.05555550494},
            {"x":-0.3691672743,"y":0.2654322},            
            {"x":-0.4409680113,"y":0.2654322}
            ];
            var letterL = [
            {"x":0,"y":-0.1172839},
            {"x":0.07407407407,"y":-0.1172839},
            {"x":0.07407407407,"y":0.2037038049},
            {"x":0.2136650603,"y":0.2037038049},           
            {"x":0.2182105157,"y":0.2654322},
            {"x":0,"y":0.2654322}
            ];
            /*var letterS = [
            {"x":0.2409409113,"y":-0.1172839},
            {"x":0.4909745697,"y":-0.1172839},            
            {"x":0.4909745697,"y":0.2654322},
            {"x":0.2409409113,"y":0.2654322}
            ];*/

            var letterS = [
            {"x":0.248776,"y":0.2224592},
            {"x":0.2956528,"y":0.1731152},
            {"c1x":0.3743976,"c1y":0.2113568,"c2x":0.4362832,"c2y":0.1762,"x":0.4350496,"y":0.1595456},
            {"c1x":0.433816,"c1y":0.142892,"c2x":0.4313488,"c2y":0.121920798,"x":0.3696688,"y":0.1040336},
            {"c1x":0.3079888,"c1y":0.086146398,"c2x":0.264196,"c2y":0.057156799,"x":0.263579196,"y":-0.00082240236},
            {"c1x":0.262962404,"c1y":-0.058801603,"c2x":0.2993536,"c2y":-0.116164004,"x":0.3992752,"y":-0.1258272},
            {"c1x":0.499196805,"c1y":-0.114930402,"c2x":0.5041312,"c2y":-0.082240002,"x":0.5041312,"y":-0.082240002},
            {"x":0.4560208,"y":-0.0353632046},
            {"c1x":0.436283204,"c1y":-0.065586403,"c2x":0.395574405,"c2y":-0.064969603,"x":0.395574405,"y":-0.064969603},
            {"c1x":0.354865595,"c1y":-0.064352804,"c2x":0.3338944,"c2y":-0.046465602,"x":0.3338944,"y":-0.0143920012},
            {"c1x":0.3338944,"c1y":0.0176815992,"c2x":0.383238403,"c2y":0.033101601,"x":0.419012796,"y":0.044820797},
            {"c1x":0.4547872,"c1y":0.056539999,"c2x":0.5022808,"c2y":0.068876,"x":0.5041312,"y":0.143508796},
            {"c1x":0.5059816,"c1y":0.218141596,"c2x":0.453553595,"c2y":0.2668688,"x":0.3709024,"y":0.2705696},
            {"c1x":0.2882512,"c1y":0.274270397,"c2x":0.248776,"c2y":0.2224592,"x":0.248776,"y":0.2224592}
            ];

            //letterM = "M418.674,356.443h13.325l13.116,34.422l13.255-34.422h13.186v49.135h-8.328v-40.807h-0.139l-14.921,40.807h-6.107l-14.921-40.807h-0.139v40.807h-8.328V356.443z"
            //letterL = "M482.729,356.443h8.745v41.224h20.889v7.911h-29.634V356.443z";
            letterS = "M544.217,366.992c-0.927-1.342-2.163-2.325-3.713-2.95c-1.551-0.625-3.182-0.937-4.893-0.937c-1.019,0-2.002,0.116-2.95,0.347c-0.948,0.232-1.804,0.602-2.567,1.11c-0.764,0.51-1.377,1.169-1.839,1.978c-0.463,0.81-0.694,1.77-0.694,2.88c0,1.666,0.578,2.938,1.735,3.817c1.155,0.879,2.59,1.643,4.303,2.291c1.711,0.648,3.585,1.273,5.621,1.874c2.035,0.602,3.909,1.435,5.621,2.499c1.712,1.065,3.146,2.476,4.303,4.233c1.156,1.759,1.735,4.095,1.735,7.009c0,2.638-0.485,4.939-1.457,6.905c-0.972,1.968-2.279,3.599-3.922,4.894s-3.551,2.267-5.725,2.914c-2.176,0.647-4.466,0.972-6.871,0.972c-3.054,0-5.992-0.51-8.813-1.526c-2.822-1.018-5.252-2.729-7.287-5.136l6.593-6.385c1.064,1.62,2.464,2.88,4.199,3.782c1.734,0.902,3.574,1.354,5.517,1.354c1.018,0,2.036-0.139,3.054-0.417c1.018-0.277,1.943-0.693,2.776-1.249c0.833-0.555,1.503-1.26,2.013-2.116c0.508-0.855,0.763-1.84,0.763-2.95c0-1.804-0.579-3.192-1.734-4.163c-1.157-0.972-2.592-1.793-4.303-2.464c-1.713-0.67-3.586-1.307-5.622-1.909c-2.036-0.601-3.91-1.423-5.621-2.464c-1.712-1.041-3.146-2.429-4.303-4.164c-1.157-1.735-1.734-4.06-1.734-6.975c0-2.544,0.521-4.742,1.561-6.593c1.041-1.85,2.405-3.389,4.095-4.615c1.688-1.225,3.62-2.139,5.795-2.741c2.175-0.601,4.396-0.902,6.663-0.902c2.59,0,5.101,0.394,7.529,1.18c2.429,0.787,4.615,2.082,6.559,3.886L544.217,366.992z";
            letterS = parseSVG(letterS);


            var transformX = 0;
            var transformY =-30;

            var speed = 1;
            var scale = 1;
            var step = 1;
            var finalStep = 100;
            var width, height;
            
            sexagon = createPairs(sexagon);
            arrow = createPairs (arrow);
            

            letterM = createPairs(letterM);
            letterL = createPairs(letterL);
            letterS = createPairs(letterS);

            var mainColor = "rgb(255,255,255)";
         
            var origin = {"x":0,"y":0};
           
            function render() {
                var canvas = document.getElementById("logo");
                width = canvas.getAttribute("width");
                height = canvas.getAttribute("height");
                var ctx = canvas.getContext('2d');
                var point;
                
                scale = document.getElementById("scale").value;
                speed = document.getElementById("speed").value;
                finalStep = speed;

                ctx.save();
                ctx.clearRect(0, 0, width, height);
            

                ctx.globalCompositeOperation = "source-over";
                //console.log(sphere);

                draw(sexagon,ctx);
                draw(arrow, ctx);

                draw(letterM,ctx);
                draw(letterL,ctx);
                draw(letterS,ctx);

                point = transformPoint({"x":0,"y":0.25*scale});

                drawCircle(ctx,point.x,point.y,Math.round(2.*scale),0,1,1);
                //drawCircle(ctx,point.x,point.y,Math.round(1.98*scale),0,1,1);

                ctx.restore();
                if(finalStep > step){
                    step+=1; //move along animation
                }
                
            }

            function parseSVG(s){
                var res = [],ary,subary,p;
                ary = s.split(/([A-Za-z])/g);
                console.log(ary);
                for (var i=0,c=ary.length;i<c;i+=1){
                    if(ary[i]){
                        if(ary[i]=="M" || ary[i]=="L"){
                            subary = ary[i+1].split(',');
                            res.push({"x":subary[0],"y":subary[1]});
                        } else if(ary[i]=="l"){
                            p = res[res.length-1];
                            subary = ary[i+1].split(',');
                            res.push({"x":p.x+subary[0],"y":p.y+subary[1]});
                        } else if(ary[i]=="c"){
                            p = res[res.length-1];
                            subary = ary[i+1].split(/[\-]\d/);
                            console.log(subary,"hi");
                            res.push({"c1x":0,"c1y":0,"c2x":0,"c2y":0,"x":p.x+subary[0],"y":p.y+subary[1]});
                        } else if("z"){
                            i=c;
                        }
                    } else {
                        console.log(ary[i]);
                    }
                    
                }
                return res;
            }

            function draw(pairs,ctx){
                var p1,p2;
                for(var i=0,c=pairs.length;i<c;i+=1){
                    p1 = {"x":pairs[i][0].x*scale,"y":pairs[i][0].y*scale};
                    p2 = {"x":pairs[i][1].x*scale,"y":pairs[i][1].y*scale};
                    if(pairs[i][1].c1x){
                        p2.c1x = pairs[i][1].c1x*scale;
                        p2.c1y = pairs[i][1].c1y*scale;
                        p2.c2x = pairs[i][1].c2x*scale;
                        p2.c2y = pairs[i][1].c2y*scale;
                    }
                    p1=transformPoint(p1);
                    p2=transformPoint(p2);

                    drawLine(ctx,p1,p2,0);
                }
            }

            function drawShape(points, ctx, stroke, color, size){
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = color || mainColor;
                ctx.fillStyle = color || mainColor;                

                ctx.moveTo(points[0].x, points[0].y);                           
                
                for(var i=1,c=points.length;i<c;i+=1){
                    if(points[i].c1x){
                        ctx.bezierCurveTo(points[i].c1x, points[i].c1y, points[i].c2x, points[i].c2y, points[i].x, points[i].y);
                    } else {
                        ctx.lineTo(points[i].x,points[i].y)
                    }
                }

                //connect back to beginning
                if(points[0].c1x){
                    ctx.bezierCurveTo(points[0].c1x, points[0].c1y, points[0].c2x, points[0].c2y, points[0].x, points[0].y);
                } else {
                    ctx.lineTo(points[0].x,points[0].y)
                }

                ctx.lineWidth = size || 1;
                if(stroke){
                    ctx.stroke();
                } else {
                    ctx.fill();
                }
                ctx.restore();
            }

            function scaleAndTransform(points){
                for(var i=0,c=points.length;i<c;i+=1){
                    points[i]=scalePoint(points[i]);                 
                    
                    points[i]=transformPoint(points[i]);
                }
                return points;
            }

            function scalePoint(p){
                p.x *= scale;
                p.y *= scale;
                if(p.c1x){
                    p.c1x *= scale;
                    p.c1y *= scale;
                    p.c2x *= scale;
                    p.c2y *= scale;
                }
                return p;
            }

            function animate(){

            }

            function transformPoint(p){
                
                p.x = Math.round(p.x+width/2)+transformX;
                p.y = Math.round(p.y+height/2)+transformY;
                
                if(p.c1x){
                    p.c1x = Math.round(p.c1x+width/2)+transformX;
                    p.c1y = Math.round(p.c1y+height/2)+transformY;
                    p.c2x = Math.round(p.c2x+width/2)+transformX;
                    p.c2y = Math.round(p.c2y+height/2)+transformY;
                }
                
                return p;
            }

            function createPairs(points){
                var pairs=[];
                var pair;
                for(var i=1,c=points.length;i<c;i+=1){
                    pair = [];
                    pair.push(points[i-1]);
                    pair.push(points[i]);
                    pairs.push(pair);
                }

                //closing link
                pairs.push([points[points.length-1],points[0]]);

                return pairs;
            }
          
            
            function drawPoint(ctx, x, y, size, color, stroke, animate) {
                var start = 0;
                var end = 2*Math.PI;
                var pi2 = 2*Math.PI;
                var center = 1.5*Math.PI;

                if(animate && step != finalStep){
                    end = center-(step/finalStep*Math.PI);
                    start = (center+(step/finalStep*Math.PI))%pi2;
                }


                color = color || mainColor; 
                ctx.save();
                ctx.beginPath();
                
                ctx.arc(x, y, size,start,end, true);

                if(stroke){
                    ctx.strokeStyle = color;
                    ctx.lineWidth = stroke;
                    ctx.stroke();
                } else {
                    ctx.fillStyle = color;
                    ctx.fill();
                }
                ctx.restore();
            }

            var drawCircle = drawPoint;

            function drawLine(ctx, p1, p2, depth, size, color) {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = color || mainColor;              
                
                //console.log(depth);

                if(depth){
                    var gray;
                    var grd = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                    
                    //first gray
                    gray = maxLightGray-Math.round(maxLightGray*depth[0])+30;
                    gray = [gray,gray,gray];
                    grd.addColorStop(0, "rgb("+gray.join(",")+")");
                    //second gray
                    gray = maxLightGray-Math.round(maxLightGray*depth[1])+30;
                    gray = [gray,gray,gray];
                    grd.addColorStop(1, "rgb("+gray.join(",")+")");

                    //overwrite style
                    ctx.strokeStyle=grd;
                    
                }

                if(!p1.c1x){
                    ctx.moveTo(p1.x, p1.y);
                }
                if(p2.c1x){
                    ctx.bezierCurveTo(p2.c1x, p2.c1y, p2.c2x, p2.c2y, p2.x, p2.y);
                } else {
                    ctx.lineTo(p2.x,p2.y)
                }
                
                
                ctx.lineWidth = size || 1;
                ctx.stroke();
                ctx.restore();
            }

            function init(){
                
                scale = document.getElementById("scale").value;
                width = document.getElementById("logo").getAttribute("width");
                height = document.getElementById("logo").getAttribute("height");
                arrow = scaleAndTransform(arrow);

                // Set framerate to 30 fps
                setInterval(render, 1000/24);
                
                document.getElementById("logo").onmouseover = function(e){
                    //console.log(e);
                    step=1;
                    //
                };
            }

            function setInValue(n,name){
                if(name){
                    document.getElementById('cus').click();
                } else {
                   document.getElementById(n+'Val').innerHTML = document.getElementById(n).value; 
               }                
            }

            function sHelper(p){
                var movebyX= 0.8;
                var movebyY= -0.704;
                var scale = 0.514;
                for(var i=0,c=p.length;i<c;i+=1){
                    p[i].y*=-1;
                    p[i].x-=movebyX;
                    p[i].y-=movebyY;

                    p[i].x*=scale;
                    p[i].y*=scale;

                    if(p[i].c1x){
                        p[i].c1y*=-1;
                        p[i].c2y*=-1;

                        p[i].c1x-=movebyX;
                        p[i].c1y-=movebyY;
                        p[i].c2x-=movebyX;
                        p[i].c2y-=movebyY;

                        p[i].c1x*=scale;
                        p[i].c1y*=scale;
                        p[i].c2x*=scale;
                        p[i].c2y*=scale;
                    }
                }
                console.log(JSON.stringify(p));
                return p;
            }