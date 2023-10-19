describe('Config spec', function() {

        it('Should present an API through a \'module.exports\' object', function() {
              expect(module.exports).toBeDefined();
              expect(module.exports).toBeInstanceOf(Object);              
        })

        describe("Config Spec\'s API methods exporting via \'module.exports\'", function() {
            let _m = module.exports;
            const _m_pristine = Object.assign({}, _m);

            beforeEach(function() {
                _m.setView(void(0));
            });


            afterEach(function() {
                _m = Object.assign({}, _m_pristine );
            });
            it("Should use \'setView\' getter/setter API method for the \'view\' private field (typically suppled to 'gulp run' from CLI as --view param)", function() {
                expect(_m.setView).toBeInstanceOf(Function);              
                expect(_m.view).toBeInstanceOf(Function);              
                expect(_m.view()).toBeUndefined();
                _m.setView("IAMS_VU2");
                expect(_m.view()).toEqual("IAMS_VU2");
            });
            it("[REFACTOR] should (quirkily) expose a public \'useScss\' instance field independent of the getter/setters", function() {
                expect(_m.useScss).toBeUndefined();
                _m.setUseScss("true");
                expect(_m.useScss).toEqual("true");
                _m.useScss = "FaLsE";
                expect(_m.useScss).toEqual("FaLsE");
            });
            it("Should use \'setUseScss\' getter/setter API methods for the \'useScss\' private field (typically suppled to 'gulp run' from CLI as --useScss param)", function() {
                expect(_m.setUseScss).toBeInstanceOf(Function);              
                expect(_m.getUseScss).toBeInstanceOf(Function);  
                _m.setUseScss("true");
                expect(_m.getUseScss()).toBeTruthy()
            });
/* Todo */  it("[REFACTOR] should (quirkily) expose a public \'PROXY_SERVER\' instance field independent of the getter/setters", function() {
                expect(_m.PROXY_SERVER).toEqual("http://your-server:your-port");
                _m.setProxy("http://vlb-priplufe1:1701/");
                expect(_m.PROXY_SERVER).toEqual("http://vlb-priplufe1:1701/");
            });
/* Todo */  it("[BUG] should have a public \'PROXY_SERVER\' instance field out of sync with the private corollary used by the getter", function() {
                expect(_m.PROXY_SERVER).toEqual("http://your-server:your-port");
                _m.setProxy("http://vlb-priplufe1:1701/");
                expect(_m.PROXY_SERVER).toEqual("http://vlb-priplufe1:1701/");
                expect(_m.proxy()).not.toEqual("http://vlb-priplufe1:1701/");
                expect(_m.proxy()).toEqual("http://your-server:your-port");
                // I mean ... talk about a useless 'getter' method!
            });
            it("Should use \'setReinstallNodeModules\' getter/setter API methods for the \'reinstallNodeModules\' private field", function() {
                expect(_m.setReinstallNodeModules).toBeInstanceOf(Function);              
                expect(_m.getReinstallNodeModules).toBeInstanceOf(Function);  
                expect(_m.getReinstallNodeModules()).toBeUndefined();  
                _m.setReinstallNodeModules("true"); 
                expect(_m.getReinstallNodeModules()).toBeTruthy()
            });
            it("Should use \'setBrowserify\' getter/setter API methods for the \'browserify\' private field", function() {
                expect(_m.setBrowserify).toBeInstanceOf(Function);              
                expect(_m.getBrowserify).toBeInstanceOf(Function);  
                expect(_m.getBrowserify()).toBeUndefined();  
                _m.setBrowserify("TrUe"); 
                expect(_m.getBrowserify()).toEqual("TrUe")
            });
            it("Should use \'setVe\' getter/setter API methods for the \'ve\' private field (typically suppled to 'gulp run' from CLI as --ve param)", function() {
                expect(_m.setVe).toBeInstanceOf(Function);              
                expect(_m.getVe).toBeInstanceOf(Function);  
                //expect(_m.getVe()).toBeUndefined();  
                _m.setVe("FaLsE"); 
                 expect(_m.getVe()).toEqual("FaLsE")
            });
/* Todo */  it("Should have a \'setVe\' setter that behaves quirkly when called with a forced conversion (see gulpfile.js)", function() {
                _m.setVe(!!("true"));
                expect(_m.getVe()).toBeTrue();
                _m.setVe(!!("false"));
                expect(_m.getVe()).toBeTrue();
                _m.setVe(!!(""))
                expect(_m.getVe()).toBeFalse();  
            });
            it("Should use \'setSaml\' getter/setter API methods for the \'saml\' private field (typically suppled to 'gulp run' from CLI as --saml param)", function() {
                expect(_m.setSaml).toBeInstanceOf(Function);              
                expect(_m.getSaml).toBeInstanceOf(Function);  
                expect(_m.getSaml()).toBeUndefined();  
                _m.setSaml("SOMEvalue"); 
                 expect(_m.getSaml()).toEqual("SOMEvalue")
            });
            it("Should use \'setCas\' getter/setter API methods for the \'cas\' private field (typically suppled to 'gulp run' from CLI as --cas param)", function() {
                expect(_m.setCas).toBeInstanceOf(Function);              
                expect(_m.getCas).toBeInstanceOf(Function);  
                expect(_m.getCas()).toBeUndefined();  
                _m.setCas("someVALUE"); 
                expect(_m.getCas()).toEqual("someVALUE")
            });

        });
        describe("The \'buildParams\' (mainly build file path stuff) exported as a property on \'module.exports\'", function() {
            const bparams = module.exports.buildParams;
            const _m_pristine = Object.assign({}, module.exports);
            const mockView= "XYZ_VIEW";
            beforeEach(function() {
                module.exports.setView(mockView);
            });

            afterEach(function() {
                module.exports = Object.assign({}, _m_pristine );
            });
            describe("The immutable string stuff in \/buildParams\'" , function() {
                it("Should expose properties \'customFile\' and \'customCssFile\' which are strings", function() {
                    expect(bparams.customFile).toBeInstanceOf(String);              
                    expect(bparams.customCssFile).toBeInstanceOf(String);
                });              
                it("Should have a \'customFile\' property hardcoded to \'custom.js\'", function() {
                    expect(bparams.customFile).toEqual("custom.js");                       
                });
                it("Should have a \'SERVERS\' property hardcoded to {local: \'http://localhost:8002\'}", function() {
                    expect(SERVERS.local).toEqual("http://localhost:8002");
                });
                it("Should have a \'PROXY_SERVER\' property hardcoded to \'http://your-server:your-port\'", function() {
                    expect(PROXY_SERVER).toEqual("http://your-server:your-port");
                });
            });
            describe("The dynamicly generated filepath and directory name stuff in \'buildParams\'" , function() {
                describe("The methods on \'buildParams\' concerned with JavaScript filepaths and directory / file names", function() {
                    it("Should have a \'customPath()\' method for «filePath»/«name.js» to end-goal JavaScript file from build process", function() {
                        expect(bparams.customPath).toBeInstanceOf(Function);
                        spyOn(bparams, "viewJsDir");
                        expect(bparams.customPath()).toEqual("primo-explore/custom/XYZ_VIEW/js/custom.js");
              /* TODO */expect(bparams.viewJsDir).toHaveBeenCalledTimes(0); // Should have been caled once
                    });
                    it("Should have a \'viewJsDir()\' method returning \'primo-explore/custom/«VIEW»/js\'", function() {
                        expect(bparams.viewJsDir).toBeInstanceOf(Function);
                        expect(bparams.viewJsDir()).toEqual("primo-explore/custom/XYZ_VIEW/js");
                    });
                    it("Should have a \'customModulePath()\' method returning \'primo-explore/custom/«VIEW»/js/«CUSTOME.MODULE.JS»\'", function() {
                        expect(bparams.customModulePath).toBeInstanceOf(Function);
                        expect(bparams.customModulePath()).toEqual("primo-explore/custom/XYZ_VIEW/js/custom.module.js");
                    });
                    it("Should have a \'mainPath()\' method returning \'primo-explore/custom/«VIEW»/js/*.js\'", function() {
                        expect(bparams.mainPath).toBeInstanceOf(Function);
                        expect(bparams.mainPath()).toEqual("primo-explore/custom/XYZ_VIEW/js/*.js");
                    });
                    it("Should have a \'mainJsPath()\' method returning \'primo-explore/custom/«VIEW»/js/main.js\'", function() {
                        expect(bparams.mainJsPath).toBeInstanceOf(Function);
                        expect(bparams.mainJsPath()).toEqual("primo-explore/custom/XYZ_VIEW/js/main.js");
                    });
                });
                describe("The methods on \'buildParams\' concerned with NPM filepaths and directory / file names", function() {
                    it("Should have a \'customNpmModuleRootDir()\' method for «filePath»/«name.js» to end-goal JavaScript file from build process", function() {
                        expect(bparams.customNpmModuleRootDir).toBeInstanceOf(Function);
                        expect(bparams.customNpmModuleRootDir()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules");
                    });
                    it("Should have a \'customNpmJsCustomPath()\' method returning \'primo-explore/custom/«VIEW»/node_modules/primo-explore*/js/custom.js\'", function() {
                        expect(bparams.customNpmJsCustomPath).toBeInstanceOf(Function);
                        expect(bparams.customNpmJsCustomPath()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules/primo-explore*/js/custom.js");
                    });
                    it("Should have a \'customNpmJsModulePath()\' method returning \'primo-explore/custom/«VIEW»/node_modules/primo-explore*/js/custom.module.js\'", function() {
                        expect(bparams.customNpmJsModulePath).toBeInstanceOf(Function);
                        expect(bparams.customNpmJsModulePath()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules/primo-explore*/js/custom.module.js");
                    });
                    it("Should have a \'customNpmJsPath()\' method returning \'primo-explore/custom/«VIEW»/node_modules/primo-explore*/js/*.js\'", function() {
                        expect(bparams.customNpmJsPath).toBeInstanceOf(Function);
                        expect(bparams.customNpmJsPath()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules/primo-explore*/js/*.js");
                    });
                    it("Should have a \'customNpmDistPath()\' method returning \'primo-explore/custom/«VIEW»/node_modules/primo-explore*/dist/*.js\'", function() {
                        expect(bparams.customNpmDistPath).toBeInstanceOf(Function);
                        expect(bparams.customNpmDistPath()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules/primo-explore*/dist/*.js");
                    });
                    it("Should have a \'customNpmCssPath()\' method returning \'primo-explore/custom/XYZ_VIEW/scss\'", function() {
                        expect(bparams.customNpmCssPath).toBeInstanceOf(Function);
                        expect(bparams.customNpmCssPath()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules/primo-explore*/css/*.css");
                     });
                     it("Should have a \'customNpmHtmlPath()\' method returning \'primo-explore/custom/XYZ_VIEW/scss\'", function() {
                        expect(bparams.customNpmHtmlPath).toBeInstanceOf(Function);
                        expect(bparams.customNpmHtmlPath()).toEqual("primo-explore/custom/XYZ_VIEW/node_modules/primo-explore*/html/*.html");
                     });
                });
                describe("The methods on \'buildParams\' concerned with CSS filepaths and directory / file names", function() {
                    beforeEach(function() {
                    });
                    it("Should have a \'customCssPath()\' method for «filePath»/«name.js» to end-goal JavaScript file from build process", function() {
                        expect(bparams.customCssPath).toBeInstanceOf(Function);
                        expect(bparams.customCssPath()).toEqual("primo-explore/custom/XYZ_VIEW/css/custom1.css");
                    });
                    it("Should have a \'customCssMainPath()\' method for «filePath»/«name.js» to end-goal CSS file from build process", function() {
                        expect(bparams.customCssMainPath).toBeInstanceOf(Function);
                        let spy = spyOn(bparams, "viewCssDir").and.stub();
                        spyOn(bparams, "customCssMainPath").and.returnValue(spy());
                        expect(bparams.customCssMainPath()).not.toEqual("primo-explore/custom/XYZ_VIEW/css/*.js");
                        expect(bparams.viewCssDir).toHaveBeenCalled(); // Should have been caled once
                    });
                    // Refactor, a three line function that returns what could be achieved as a one-line constant: I know, right!
        /* Todo */  it("Should have a \'customColorsPath()\' method returning \'colors.json\'", function() {
                        expect(bparams.customColorsPath).toBeInstanceOf(Function);
                        expect(bparams.customColorsPath()).toEqual("colors.json");
                    });
                    it("Should have a \'viewCssDir()\' method returning \'primo-explore/custom/XYZ_VIEW/css\'", function() {
                        expect(bparams.viewCssDir).toBeInstanceOf(Function);
                        expect(bparams.viewCssDir()).toEqual("primo-explore/custom/XYZ_VIEW/css");
                     });
                     it("Should have a \'customScssDir()\' method returning \'primo-explore/custom/XYZ_VIEW/scss\'", function() {
                        expect(bparams.customScssDir).toBeInstanceOf(Function);
                        expect(bparams.customScssDir()).toEqual("primo-explore/custom/XYZ_VIEW/scss");
                     });
                     it("Should have a \'customScssMainPath()\' method for «filePath»/«name.js» to end-goal CSS file from build process", function() {
                        expect(bparams.customScssMainPath).toBeInstanceOf(Function);
                        let spy = spyOn(bparams, "customScssDir").and.stub();
                        spyOn(bparams, "customScssMainPath").and.returnValue(spy());
                        expect(bparams.customScssMainPath()).not.toEqual("primo-explore/custom/XYZ_VIEW/css/*.js");
                        expect(bparams.customScssDir).toHaveBeenCalled(); // Should have been caled once
                    });
                });
                describe("The methods on \'buildParams\' concerned with HTML filepaths and directory / file names", function() {
                    beforeEach(function() {
                    });
                    // Refactor: again why three lines of code comprising a function wrapping around what essentially is a constant? Would not an object property using seal / freeze be better?
        /* Todo */  it("Should have a \'viewHtmlDir()\' method returning \'primo-explore/custom/XYZ_VIEW/css\'", function() {
                        expect(bparams.viewHtmlDir).toBeInstanceOf(Function);
                        expect(bparams.viewHtmlDir()).toEqual("primo-explore/custom/XYZ_VIEW/html");
                     });
                });
             });

        });
})