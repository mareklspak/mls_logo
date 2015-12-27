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
            ];

            var letterS = [
            {"x":1.284,"y":0.2712},
            {"x":1.3752,"y":0.3672},
            {"c1x":1.5284, "c1y":0.2928, "c2x":1.6488, "c2y":0.3612, "x":1.6464, "y":0.3936},
            {"c1x":1.644, "c1y":0.426, "c2x":1.6392, "c2y":0.4668, "x":1.5192, "y":0.5016},
            {"c1x":1.3992, "c1y":0.5364, "c2x":1.314, "c2y":0.5928, "x":1.3128, "y":0.7056},
            {"c1x":1.3116, "c1y":0.8184, "c2x":1.3824, "c2y":0.93, "x":1.5768, "y":0.9488},
            {"c1x":1.7712, "c1y":0.9276, "c2x":1.7808, "c2y":0.864, "x":1.7808, "y":0.864},//
            {"x":1.6872,"y":0.7728},
            {"c1x":1.6488, "c1y":0.8316, "c2x":1.5696, "c2y":0.8304, "x":1.5696, "y":0.8304},//
            {"c1x":1.4904, "c1y":0.8292, "c2x":1.4496, "c2y":0.7944, "x":1.4496, "y":0.732},
            {"c1x":1.4496, "c1y":0.6696, "c2x":1.5456, "c2y":0.6396, "x":1.6152, "y":0.6168},
            {"c1x":1.6848, "c1y":0.594, "c2x":1.7772, "c2y":0.57, "x":1.7808, "y":0.4248},
            {"c1x":1.7844, "c1y":0.2796, "c2x":1.6824, "c2y":0.1848, "x":1.5216, "y":0.1776},
            {"c1x":1.3608, "c1y":0.1704, "c2x":1.284, "c2y":0.2712, "x":1.284, "y":0.2712}//
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
      
            var transformX = 0;
            var transformY =-30;

            var speed = 1;
            var scale = 1;
            var step = 1;
            var finalStep = 100;
            var width, height;
            
            sexagon = createPairs(sexagon);
            //arrow = createPairs (arrow);
            

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
                drawShape(arrow, ctx);

                draw(letterM,ctx);
                draw(letterL,ctx);
                draw(letterS,ctx);

                point = transformPoint({"x":0,"y":0.25*scale});

                drawCircle(ctx,point.x,point.y,2*scale,0,1,1);

                ctx.restore();
                if(finalStep > step){
                    step+=1; //move along animation
                }
                
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
                    ctx.lineWidth = 3;
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