# SAMURAI SMOKEY: SITE ARCHITECTURE BLUEPRINT

This document serves as the master context blueprint for the samuraismokey.com web development pipeline. All code generation, layout design, and style updates must strictly align with the specs outlined below.

---

## 1. PROJECT DIRECTORY TREE & ACTIVE FILE INVENTORY
The following manifest map details both the structural folder paths and the matching relative file paths utilized by Hugo for building the ecosystem.

### A. Core Directory Structure Map Version 1.0

PS C:\Users\xxjaz\Documents\ProjectSS\Website> tree
Folder PATH listing for volume OS
Volume serial number is 000000B2 CA13:CFAC
C:.
├───.github
│   └───workflows
├───archetypes
├───assets
│   └───css
├───content
│   ├───archive
│   │   └───samuraismokey
│   ├───comics
│   │   ├───food-cats
│   │   └───samurai-smokey
│   ├───commissions
│   ├───gallery
│   ├───info
│   ├───play
│   └───themes
├───layouts
│   ├───page
│   ├───play
│   ├───themes
│   └───_default
├───public
│   ├───about
│   ├───archive
│   │   ├───2020-ch1
│   │   ├───2020-ch2
│   │   ├───2020-ch3
│   │   └───samuraismokey
│   │       ├───2020-ch1
│   │       ├───2020-ch2
│   │       └───2020-ch3
│   ├───bubble
│   ├───cardboard
│   ├───categories
│   ├───comics
│   │   ├───food-cats
│   │   │   ├───chapter-1
│   │   │   ├───chapter-1-copy
│   │   │   ├───chapter-10
│   │   │   ├───chapter-11
│   │   │   ├───chapter-12
│   │   │   ├───chapter-13
│   │   │   ├───chapter-2
│   │   │   ├───chapter-2---copy
│   │   │   ├───chapter-3
│   │   │   ├───chapter-4
│   │   │   ├───chapter-5
│   │   │   ├───chapter-6
│   │   │   ├───chapter-7
│   │   │   ├───chapter-8
│   │   │   └───chapter-9
│   │   └───samurai-smokey
│   │       ├───chapter-1
│   │       └───characters
│   ├───comments
│   ├───commissions
│   ├───css
│   ├───flower
│   ├───gallery
│   │   ├───commissions
│   │   ├───food-cats
│   │   ├───gallery
│   │   ├───nova
│   │   ├───personal
│   │   ├───samurai-smokey
│   │   └───skull-kitten
│   ├───images
│   │   ├───banners
│   │   ├───ch1
│   │   ├───ch2
│   │   ├───ch3
│   │   ├───comicsicon
│   │   ├───foodcats
│   │   │   ├───ch1
│   │   │   ├───ch10
│   │   │   ├───ch11
│   │   │   ├───ch12
│   │   │   ├───ch13
│   │   │   ├───ch2
│   │   │   ├───ch3
│   │   │   ├───ch4
│   │   │   ├───ch5
│   │   │   ├───ch6
│   │   │   ├───ch7
│   │   │   ├───ch8
│   │   │   └───ch9
│   │   └───gallery
│   │       ├───commissions
│   │       ├───foodcats
│   │       ├───nova
│   │       ├───personalart
│   │       └───skullkitten
│   ├───info
│   ├───js
│   ├───play
│   │   ├───breach
│   │   ├───defender
│   │   ├───fishclicker
│   │   ├───moonbuggy
│   │   ├───neongrid
│   │   └───neonrush
│   ├───ps-theme
│   ├───shinobi
│   ├───sonic
│   ├───tags
│   └───themes
│       ├───bubble
│       ├───cardboard
│       ├───flower
│       ├───ophelia
│       ├───popit
│       ├───shinobi
│       ├───smokey
│       └───sonic
├───server
│   ├───about
│   ├───ananke
│   │   └───css
│   ├───categories
│   │   └───chapter-1
│   │       └───page
│   │           └───1
│   ├───css
│   ├───gallery
│   │   └───page
│   │       └───1
│   ├───images
│   │   └───gallery
│   ├───posts
│   │   ├───page
│   │   │   └───1
│   │   └───page-1
│   └───tags
├───static
│   ├───images
│   │   ├───banners
│   │   ├───ch1
│   │   ├───ch2
│   │   ├───ch3
│   │   ├───comicsicon
│   │   ├───foodcats
│   │   │   ├───ch1
│   │   │   ├───ch10
│   │   │   ├───ch11
│   │   │   ├───ch12
│   │   │   ├───ch13
│   │   │   ├───ch2
│   │   │   ├───ch3
│   │   │   ├───ch4
│   │   │   ├───ch5
│   │   │   ├───ch6
│   │   │   ├───ch7
│   │   │   ├───ch8
│   │   │   └───ch9
│   │   └───gallery
│   │       ├───commissions
│   │       ├───foodcats
│   │       ├───nova
│   │       ├───personalart
│   │       └───skullkitten
│   └───js
└───themes
    └───ananke
        ├───.frontmatter
        │   └───database
        ├───.github
        │   ├───ISSUE_TEMPLATE
        │   └───scripts
        ├───.vscode
        ├───archetypes
        ├───assets
        │   └───ananke
        │       ├───css
        │       ├───dist
        │       └───socials
        ├───config
        │   └───_default
        ├───docs
        │   ├───configuration
        │   ├───content
        │   ├───customisation
        │   └───installation
        ├───i18n
        ├───images
        ├───layouts
        │   ├───page
        │   ├───post
        │   ├───_partials
        │   │   ├───func
        │   │   │   ├───social
        │   │   │   └───style
        │   │   ├───social
        │   │   └───svg
        │   └───_shortcodes
        ├───site
        │   ├───.frontmatter
        │   │   └───database
        │   ├───assets
        │   │   └───ananke
        │   │       └───css
        │   ├───config
        │   │   └───_default
        │   ├───layouts
        │   │   └───_shortcodes
        │   ├───partials
        │   └───static
        │       └───assets
        └───static
            └───images
PS C:\Users\xxjaz\Documents\ProjectSS\Website> 

### B. Flat Relative File Manifest

Path                                                                                            
----                                                                                            
\.hugo_build.lock                                                                               
\folder_structure.txt                                                                           
\hugo.toml                                                                                      
\SAMURAI_SMOKEY_BLUEPRINT.md                                                                    
\.github\workflows\hugo.yml                                                                     
\archetypes\default.md                                                                          
\assets\css\custom.css                                                                          
\content\about.md                                                                               
\content\comments.md                                                                            
\content\image.png                                                                              
\content\ps-theme.md                                                                            
\content\_index.md                                                                              
\content\archive\_index.md                                                                      
\content\archive\samuraismokey\2020-ch1.md                                                      
\content\archive\samuraismokey\2020-ch2.md                                                      
\content\archive\samuraismokey\2020-ch3.md                                                      
\content\archive\samuraismokey\_index.md                                                        
\content\comics\_index.md                                                                       
\content\comics\food-cats\chapter-1.md                                                          
\content\comics\food-cats\chapter-10.md                                                         
\content\comics\food-cats\chapter-11.md                                                         
\content\comics\food-cats\chapter-12.md                                                         
\content\comics\food-cats\chapter-13.md                                                         
\content\comics\food-cats\chapter-2.md                                                          
\content\comics\food-cats\chapter-3.md                                                          
\content\comics\food-cats\chapter-4.md                                                          
\content\comics\food-cats\chapter-5.md                                                          
\content\comics\food-cats\chapter-6.md                                                          
\content\comics\food-cats\chapter-7.md                                                          
\content\comics\food-cats\chapter-8.md                                                          
\content\comics\food-cats\chapter-9.md                                                          
\content\comics\food-cats\_index.md                                                             
\content\comics\samurai-smokey\chapter-1.md                                                     
\content\comics\samurai-smokey\characters.md                                                    
\content\comics\samurai-smokey\_index.md                                                        
\content\commissions\_index.md                                                                  
\content\gallery\commissions.md                                                                 
\content\gallery\food-cats.md                                                                   
\content\gallery\nova.md                                                                        
\content\gallery\personal.md                                                                    
\content\gallery\samurai-smokey.md                                                              
\content\gallery\skull-kitten.md                                                                
\content\gallery\_index.md                                                                      
\content\info\_index.md                                                                         
\content\play\breach.md                                                                         
\content\play\defender.md                                                                       
\content\play\fishclicker.md                                                                    
\content\play\moonbuggy.md                                                                      
\content\play\neongrid.md                                                                       
\content\play\neonrush.md                                                                       
\content\play\_index.md                                                                         
\content\themes\bubble.md                                                                       
\content\themes\flower.md                                                                       
\content\themes\ophelia.md                                                                      
\content\themes\popit.md                                                                        
\content\themes\shinobi.md                                                                      
\content\themes\smokey.md                                                                       
\content\themes\sonic.md                                                                        
\content\themes\_index.md                                                                       
\layouts\index.html                                                                             
\layouts\page\comments.html                                                                     
\layouts\play\breach.html                                                                       
\layouts\play\defender.html                                                                     
\layouts\play\fishclicker.html                                                                  
\layouts\play\neongrid.html                                                                     
\layouts\play\neonrush.html                                                                     
\layouts\themes\list.html                                                                       
\layouts\_default\baseof.html                                                                   
\layouts\_default\character-select.html                                                         
\layouts\_default\list.html                                                                     
\layouts\_default\moonbuggy.html                                                                
\layouts\_default\single.html                                                                   
\layouts\_default\theme-layout.html                                                             
\layouts\_default\theme-picker.html                                                             
\public\CNAME                                                                                   
\public\gallery.js                                                                              
\public\icon.png                                                                                
\public\image.png                                                                               
\public\index.html                                                                              
\public\index.xml                                                                               
\public\sitemap.xml                                                                             
\public\about\index.html                                                                        
\public\archive\index.html                                                                      
\public\archive\index.xml                                                                       
\public\archive\2020-ch1\index.html                                                             
\public\archive\2020-ch2\index.html                                                             
\public\archive\2020-ch3\index.html                                                             
\public\archive\samuraismokey\index.html                                                        
\public\archive\samuraismokey\index.xml                                                         
\public\archive\samuraismokey\2020-ch1\index.html                                               
\public\archive\samuraismokey\2020-ch2\index.html                                               
\public\archive\samuraismokey\2020-ch3\index.html                                               
\public\bubble\index.html                                                                       
\public\cardboard\index.html                                                                    
\public\categories\index.html                                                                   
\public\categories\index.xml                                                                    
\public\comics\index.html                                                                       
\public\comics\index.xml                                                                        
\public\comics\food-cats\index.html                                                             
\public\comics\food-cats\index.xml                                                              
\public\comics\food-cats\chapter-1\index.html                                                   
\public\comics\food-cats\chapter-1-copy\index.html                                              
\public\comics\food-cats\chapter-10\index.html                                                  
\public\comics\food-cats\chapter-11\index.html                                                  
\public\comics\food-cats\chapter-12\index.html                                                  
\public\comics\food-cats\chapter-13\index.html                                                  
\public\comics\food-cats\chapter-2\index.html                                                   
\public\comics\food-cats\chapter-2---copy\index.html                                            
\public\comics\food-cats\chapter-3\index.html                                                   
\public\comics\food-cats\chapter-4\index.html                                                   
\public\comics\food-cats\chapter-5\index.html                                                   
\public\comics\food-cats\chapter-6\index.html                                                   
\public\comics\food-cats\chapter-7\index.html                                                   
\public\comics\food-cats\chapter-8\index.html                                                   
\public\comics\food-cats\chapter-9\index.html                                                   
\public\comics\samurai-smokey\index.html                                                        
\public\comics\samurai-smokey\index.xml                                                         
\public\comics\samurai-smokey\chapter-1\index.html                                              
\public\comics\samurai-smokey\characters\index.html                                             
\public\comments\index.html                                                                     
\public\commissions\index.html                                                                  
\public\commissions\index.xml                                                                   
\public\css\custom.min.0152d8150d2b0797381b95ae92a326742674d761c9a5a9fef6979d2aea2892df.css     
\public\css\custom.min.0841325b198e258e14799c0fa7945e576a2ee63b478d8401b120e65ec7741962.css     
\public\css\custom.min.1562172751ca87028e2819f18f9802aa22958f39a846de74e04fb2fa8e66abdf.css     
\public\css\custom.min.1bc608e0105029029eebe807a210827c0877c2328d86288bc63f160892cdcd1f.css     
\public\css\custom.min.224473f37db8f633851b77ea902044e8292705af2a8325cc669da67e8cb09114.css     
\public\css\custom.min.28858198573116539fa2cc12e3820e0933bf3fb4cd4872f99008912fc994f003.css     
\public\css\custom.min.2cb3f60f8f4c6bf75fe1e4d23822dae7236270f2e9a058f6756690bf833f537e.css     
\public\css\custom.min.321ccc92d3102cde3f841a9b259bb8fa29339337ae5b0733ce61ca38c23d3d53.css     
\public\css\custom.min.3470e389b42c91cd9dfe8465a05d77005246b48af43bc0f519444a0c96f29c39.css     
\public\css\custom.min.47b6659cb88a886e2b6dba88ae7c59e36b47b1ec187e9a39fc7278b005f116f6.css     
\public\css\custom.min.59500a6fbe4d5225a52fbfa0cae07e42ae74e0d3cb7cde64d6eedcc97446b189.css     
\public\css\custom.min.6398e6761fcd13e1ace2b8ddf08d662d370e3406688b9ca04aaca31818ebc631.css     
\public\css\custom.min.653f17be8dd2294d58fb47c63cb722cf04ebba195bd6a062a36e26ddf9ae77be.css     
\public\css\custom.min.7e1fab2ae351578f4e989f4407f7c93fb2e10f7f039c396b52e285d985ce10bb.css     
\public\css\custom.min.a0087c380a4fe9e0e6cbf165da88255b9e3b2519a995b00a21082fea0c000e15.css     
\public\css\custom.min.b16879e85c63d6b8efeace656c4e6ed62fd349625bdd883a5dcc456ef40b8e20.css     
\public\css\custom.min.baaba749920bf2075ba96345241b59776f9756dcd0c7b012e316216cc2d9b17d.css     
\public\css\custom.min.c368d015326b1ef5c7398792c70a29dc78362ea6edfc0fdc4ab48e6536fcd3bd.css     
\public\css\custom.min.ccf92abb8135fba34c7100555fa3a68ea0ca84fd59e044a30d6868cdf943c4d9.css     
\public\css\custom.min.ce926d2883090ab0e658b19ef6d071a28be3d509f68be18f1c230b520c94160e.css     
\public\css\custom.min.db3a5a01b6337bb8a7b16ca19c348a4d54f27e257ab7e8cd50f4c27e4dfa6e94.css     
\public\css\custom.min.dd1b559e07e6d47ffe76002b83f0e8167d77eade83a943b720f40ac7dab4b5f6.css     
\public\css\custom.min.f36978d25637b5436964c6e4cefd808351a90a7bd3cbec1f13cd6b0514601e1d.css     
\public\css\custom.min.f7bd7b75cfbde824a25ee06eddba7eb172ac5c05b0e078b5978c769ea21eee53.css     
\public\css\custom.min.f84564083eddb86d00d45d38483954be742d919788234507ac6e77366863fb82.css     
\public\css\custom.min.fa3cac7eb765cec1558dce5269c31762c4a6d91a93cb485819f0aeb7d469de0e.css     
\public\flower\index.html                                                                       
\public\gallery\index.html                                                                      
\public\gallery\index.xml                                                                       
\public\gallery\commissions\index.html                                                          
\public\gallery\food-cats\index.html                                                            
\public\gallery\gallery\index.html                                                              
\public\gallery\nova\index.html                                                                 
\public\gallery\personal\index.html                                                             
\public\gallery\samurai-smokey\index.html                                                       
\public\gallery\skull-kitten\index.html                                                         
\public\images\home-icon (2).jpg                                                                
\public\images\home-icon (2).png                                                                
\public\images\home-icon.jpg                                                                    
\public\images\ophelia.png                                                                      
\public\images\ophelia.png~                                                                     
\public\images\title-icon.png                                                                   
\public\images\trees.png                                                                        
\public\images\banners\foodcatsbanner.jpg                                                       
\public\images\banners\gallerybanner.jpg                                                        
\public\images\banners\samuraismokeybanner.png                                                  
\public\images\banners\skullkittenbanner.jpg                                                    
\public\images\ch1\01.png                                                                       
\public\images\ch1\02.png                                                                       
\public\images\ch1\03.png                                                                       
\public\images\ch1\04.png                                                                       
\public\images\ch1\05.png                                                                       
\public\images\ch1\06.png                                                                       
\public\images\ch1\07.png                                                                       
\public\images\ch1\08.png                                                                       
\public\images\ch1\09.png                                                                       
\public\images\ch1\10.png                                                                       
\public\images\ch1\11.png                                                                       
\public\images\ch1\12.png                                                                       
\public\images\ch1\13.png                                                                       
\public\images\ch1\14.png                                                                       
\public\images\ch1\15.png                                                                       
\public\images\ch1\16.png                                                                       
\public\images\ch1\17.png                                                                       
\public\images\ch1\18.png                                                                       
\public\images\ch1\19.png                                                                       
\public\images\ch1\20.png                                                                       
\public\images\ch1\21.png                                                                       
\public\images\ch1\22.png                                                                       
\public\images\ch1\23.png                                                                       
\public\images\ch1\24.png                                                                       
\public\images\ch1\25.png                                                                       
\public\images\ch1\26.png                                                                       
\public\images\ch1\27.png                                                                       
\public\images\ch1\28.png                                                                       
\public\images\ch1\29.png                                                                       
\public\images\ch1\30.png                                                                       
\public\images\ch1\31.png                                                                       
\public\images\ch1\32.png                                                                       
\public\images\ch1\33.png                                                                       
\public\images\ch1\34.png                                                                       
\public\images\ch1\35.png                                                                       
\public\images\ch1\36.png                                                                       
\public\images\ch1\37.png                                                                       
\public\images\ch1\38.png                                                                       
\public\images\ch1\39.png                                                                       
\public\images\ch1\40.png                                                                       
\public\images\ch1\41.png                                                                       
\public\images\ch1\42.png                                                                       
\public\images\ch1\43.png                                                                       
\public\images\ch1\44.png                                                                       
\public\images\ch1\45.png                                                                       
\public\images\ch1\46.png                                                                       
\public\images\ch1\47.png                                                                       
\public\images\ch1\48.png                                                                       
\public\images\ch1\49.png                                                                       
\public\images\ch1\50.png                                                                       
\public\images\ch1\51.png                                                                       
\public\images\ch2\01.png                                                                       
\public\images\ch2\02.png                                                                       
\public\images\ch2\03.png                                                                       
\public\images\ch2\04.png                                                                       
\public\images\ch2\05.png                                                                       
\public\images\ch2\06.png                                                                       
\public\images\ch2\07.png                                                                       
\public\images\ch2\08.png                                                                       
\public\images\ch2\09.png                                                                       
\public\images\ch2\10.png                                                                       
\public\images\ch2\11.png                                                                       
\public\images\ch2\12.png                                                                       
\public\images\ch2\13.png                                                                       
\public\images\ch2\14.png                                                                       
\public\images\ch2\15.png                                                                       
\public\images\ch2\16.png                                                                       
\public\images\ch2\17.png                                                                       
\public\images\ch2\18.png                                                                       
\public\images\ch2\19.png                                                                       
\public\images\ch2\20.png                                                                       
\public\images\ch2\21.png                                                                       
\public\images\ch2\22.png                                                                       
\public\images\ch2\23.png                                                                       
\public\images\ch2\24.png                                                                       
\public\images\ch2\25.png                                                                       
\public\images\ch2\26.png                                                                       
\public\images\ch2\27.png                                                                       
\public\images\ch2\28.png                                                                       
\public\images\ch2\29.png                                                                       
\public\images\ch2\30.png                                                                       
\public\images\ch2\31.png                                                                       
\public\images\ch2\32.png                                                                       
\public\images\ch2\33.png                                                                       
\public\images\ch2\34.png                                                                       
\public\images\ch2\35.png                                                                       
\public\images\ch2\36.png                                                                       
\public\images\ch2\37.png                                                                       
\public\images\ch2\38.png                                                                       
\public\images\ch2\39.png                                                                       
\public\images\ch2\40.png                                                                       
\public\images\ch2\41.png                                                                       
\public\images\ch2\42.png                                                                       
\public\images\ch2\43.png                                                                       
\public\images\ch2\44.png                                                                       
\public\images\ch2\45.png                                                                       
\public\images\ch2\46.png                                                                       
\public\images\ch2\47.png                                                                       
\public\images\ch2\48.png                                                                       
\public\images\ch2\49.png                                                                       
\public\images\ch2\50.png                                                                       
\public\images\ch2\51.png                                                                       
\public\images\ch2\52.png                                                                       
\public\images\ch2\53.png                                                                       
\public\images\ch2\54.png                                                                       
\public\images\ch2\55.png                                                                       
\public\images\ch2\56.png                                                                       
\public\images\ch2\57.png                                                                       
\public\images\ch2\58.png                                                                       
\public\images\ch2\59.png                                                                       
\public\images\ch2\60.png                                                                       
\public\images\ch3\01.png                                                                       
\public\images\ch3\02.png                                                                       
\public\images\ch3\03.png                                                                       
\public\images\ch3\04.png                                                                       
\public\images\ch3\05.png                                                                       
\public\images\ch3\06.png                                                                       
\public\images\ch3\07.png                                                                       
\public\images\ch3\08.png                                                                       
\public\images\ch3\09.png                                                                       
\public\images\ch3\10.png                                                                       
\public\images\ch3\11.png                                                                       
\public\images\ch3\12.png                                                                       
\public\images\ch3\13.png                                                                       
\public\images\ch3\14.png                                                                       
\public\images\ch3\15.png                                                                       
\public\images\ch3\16.png                                                                       
\public\images\ch3\17.png                                                                       
\public\images\ch3\18.png                                                                       
\public\images\ch3\19.png                                                                       
\public\images\ch3\20.png                                                                       
\public\images\ch3\21.png                                                                       
\public\images\ch3\22.png                                                                       
\public\images\ch3\23.png                                                                       
\public\images\ch3\24.png                                                                       
\public\images\ch3\25.png                                                                       
\public\images\ch3\26.png                                                                       
\public\images\ch3\27.png                                                                       
\public\images\ch3\28.png                                                                       
\public\images\ch3\29.png                                                                       
\public\images\ch3\30.png                                                                       
\public\images\ch3\31.png                                                                       
\public\images\ch3\32.png                                                                       
\public\images\ch3\33.png                                                                       
\public\images\ch3\34.png                                                                       
\public\images\ch3\35.png                                                                       
\public\images\ch3\36.png                                                                       
\public\images\ch3\37.png                                                                       
\public\images\ch3\38.png                                                                       
\public\images\ch3\39.png                                                                       
\public\images\ch3\40.png                                                                       
\public\images\ch3\41.png                                                                       
\public\images\ch3\42.png                                                                       
\public\images\ch3\43.png                                                                       
\public\images\ch3\44.png                                                                       
\public\images\ch3\45.png                                                                       
\public\images\ch3\46.png                                                                       
\public\images\ch3\47.png                                                                       
\public\images\ch3\48.png                                                                       
\public\images\ch3\49.png                                                                       
\public\images\ch3\50.png                                                                       
\public\images\ch3\51.png                                                                       
\public\images\ch3\52.png                                                                       
\public\images\ch3\53.png                                                                       
\public\images\ch3\54.png                                                                       
\public\images\ch3\55.png                                                                       
\public\images\ch3\56.png                                                                       
\public\images\ch3\57.png                                                                       
\public\images\ch3\58.png                                                                       
\public\images\ch3\59.png                                                                       
\public\images\ch3\60.png                                                                       
\public\images\comicsicon\1.png                                                                 
\public\images\comicsicon\2.png                                                                 
\public\images\comicsicon\3.png                                                                 
\public\images\comicsicon\72v.gif                                                               
\public\images\comicsicon\babu.png                                                              
\public\images\comicsicon\breach.png                                                            
\public\images\comicsicon\catnip.png                                                            
\public\images\comicsicon\comms.jpg                                                             
\public\images\comicsicon\cookiecat.png                                                         
\public\images\comicsicon\database.jpg                                                          
\public\images\comicsicon\defender.png                                                          
\public\images\comicsicon\fc.jpg                                                                
\public\images\comicsicon\feedcats.png                                                          
\public\images\comicsicon\gallery.jpg                                                           
\public\images\comicsicon\kiki.png                                                              
\public\images\comicsicon\liz.png                                                               
\public\images\comicsicon\miyagi.png                                                            
\public\images\comicsicon\moonbuggy (2).png                                                     
\public\images\comicsicon\moonbuggy.png                                                         
\public\images\comicsicon\neongrid.png                                                          
\public\images\comicsicon\neonrush.png                                                          
\public\images\comicsicon\play.jpg                                                              
\public\images\comicsicon\Screenshot 2026-04-27 210040.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 211153.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 211326.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 213657.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 214807.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 222723.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 223133.png                                      
\public\images\comicsicon\Screenshot 2026-04-27 225920.png                                      
\public\images\comicsicon\sk.jpg                                                                
\public\images\comicsicon\skull.png                                                             
\public\images\comicsicon\smokey.png                                                            
\public\images\comicsicon\ss.png                                                                
\public\images\foodcats\1.jpg                                                                   
\public\images\foodcats\10.jpg                                                                  
\public\images\foodcats\11.jpg                                                                  
\public\images\foodcats\12.jpg                                                                  
\public\images\foodcats\13.jpg                                                                  
\public\images\foodcats\2.jpg                                                                   
\public\images\foodcats\3.jpg                                                                   
\public\images\foodcats\4.jpg                                                                   
\public\images\foodcats\5.jpg                                                                   
\public\images\foodcats\6.jpg                                                                   
\public\images\foodcats\7.jpg                                                                   
\public\images\foodcats\8.jpg                                                                   
\public\images\foodcats\9.jpg                                                                   
\public\images\foodcats\banner.jpg                                                              
\public\images\foodcats\ch1\00.jpg                                                              
\public\images\foodcats\ch1\01.jpg                                                              
\public\images\foodcats\ch1\page1.jpg                                                           
\public\images\foodcats\ch1\page2.jpg                                                           
\public\images\foodcats\ch10\page1.jpg                                                          
\public\images\foodcats\ch11\page1.jpg                                                          
\public\images\foodcats\ch11\page2.jpg                                                          
\public\images\foodcats\ch12\page1.jpg                                                          
\public\images\foodcats\ch12\page2.jpg                                                          
\public\images\foodcats\ch13\page1.jpg                                                          
\public\images\foodcats\ch13\page2.jpg                                                          
\public\images\foodcats\ch2\page1.jpg                                                           
\public\images\foodcats\ch2\page2.jpg                                                           
\public\images\foodcats\ch3\page1.jpg                                                           
\public\images\foodcats\ch4\page1.jpg                                                           
\public\images\foodcats\ch4\page2.jpg                                                           
\public\images\foodcats\ch5\page1.jpg                                                           
\public\images\foodcats\ch5\page2.jpg                                                           
\public\images\foodcats\ch6\page1.jpg                                                           
\public\images\foodcats\ch7\page1.jpg                                                           
\public\images\foodcats\ch7\page2.jpg                                                           
\public\images\foodcats\ch8\page1.jpg                                                           
\public\images\foodcats\ch8\page2.jpg                                                           
\public\images\foodcats\ch9\page1.jpg                                                           
\public\images\gallery\art1.jpg                                                                 
\public\images\gallery\art1.jpg-autosave.kra                                                    
\public\images\gallery\art10.jpg                                                                
\public\images\gallery\art11.jpg                                                                
\public\images\gallery\art12.jpg                                                                
\public\images\gallery\art12.png                                                                
\public\images\gallery\art13.jpg                                                                
\public\images\gallery\art14.jpg                                                                
\public\images\gallery\art15.jpg                                                                
\public\images\gallery\art16.jpg                                                                
\public\images\gallery\art17.jpg                                                                
\public\images\gallery\art2.jpg                                                                 
\public\images\gallery\art3.png                                                                 
\public\images\gallery\art4.jpg                                                                 
\public\images\gallery\art5.png                                                                 
\public\images\gallery\art6.jpg                                                                 
\public\images\gallery\art7.jpg                                                                 
\public\images\gallery\art8.jpg                                                                 
\public\images\gallery\art9.jpg                                                                 
\public\images\gallery\DahliaSticker.png                                                        
\public\images\gallery\commissions\1.jpg                                                        
\public\images\gallery\commissions\10.jpg                                                       
\public\images\gallery\commissions\11.jpg                                                       
\public\images\gallery\commissions\12.jpg                                                       
\public\images\gallery\commissions\13.jpg                                                       
\public\images\gallery\commissions\14.jpg                                                       
\public\images\gallery\commissions\15.jpg                                                       
\public\images\gallery\commissions\2.jpg                                                        
\public\images\gallery\commissions\3.jpg                                                        
\public\images\gallery\commissions\4.jpg                                                        
\public\images\gallery\commissions\5.jpg                                                        
\public\images\gallery\commissions\6.jpg                                                        
\public\images\gallery\commissions\7.jpg                                                        
\public\images\gallery\commissions\8.jpg                                                        
\public\images\gallery\commissions\9.jpg                                                        
\public\images\gallery\foodcats\banner.jpg                                                      
\public\images\gallery\nova\1.jpg                                                               
\public\images\gallery\nova\2.jpg                                                               
\public\images\gallery\nova\3.jpg                                                               
\public\images\gallery\nova\4.png                                                               
\public\images\gallery\nova\5.png                                                               
\public\images\gallery\nova\6.jpg                                                               
\public\images\gallery\personalart\p1.jpg                                                       
\public\images\gallery\skullkitten\skullkittenbanner.jpg                                        
\public\info\image.png                                                                          
\public\info\index.html                                                                         
\public\info\index.xml                                                                          
\public\js\breach.js                                                                            
\public\js\defender.js                                                                          
\public\js\fischclicker.js                                                                      
\public\js\fishclicker.js                                                                       
\public\js\gallery.js                                                                           
\public\js\main.js                                                                              
\public\js\moon-buggy.js                                                                        
\public\js\neongrid.js                                                                          
\public\js\neonrush.js                                                                          
\public\js\theme-switcher.js                                                                    
\public\play\index.html                                                                         
\public\play\index.xml                                                                          
\public\play\breach\index.html                                                                  
\public\play\defender\index.html                                                                
\public\play\fishclicker\index.html                                                             
\public\play\moonbuggy\index.html                                                               
\public\play\neongrid\index.html                                                                
\public\play\neonrush\index.html                                                                
\public\ps-theme\index.html                                                                     
\public\shinobi\index.html                                                                      
\public\sonic\index.html                                                                        
\public\tags\index.html                                                                         
\public\tags\index.xml                                                                          
\public\themes\index.html                                                                       
\public\themes\index.xml                                                                        
\public\themes\bubble\index.html                                                                
\public\themes\cardboard\index.html                                                             
\public\themes\flower\index.html                                                                
\public\themes\ophelia\index.html                                                               
\public\themes\popit\index.html                                                                 
\public\themes\shinobi\index.html                                                               
\public\themes\smokey\index.html                                                                
\public\themes\sonic\index.html                                                                 
\server\404.html                                                                                
\server\CNAME                                                                                   
\server\index.html                                                                              
\server\index.xml                                                                               
\server\sitemap.xml                                                                             
\server\about\index.html                                                                        
\server\ananke\css\main.css.map                                                                 
\server\ananke\css\main.min.efe4d852f731d5d1fbb87718387202a97aafd768cdcdaed0662bbe6982e91824.css
\server\categories\index.html                                                                   
\server\categories\index.xml                                                                    
\server\categories\chapter-1\index.html                                                         
\server\categories\chapter-1\index.xml                                                          
\server\categories\chapter-1\page\1\index.html                                                  
\server\css\custom.css                                                                          
\server\gallery\index.html                                                                      
\server\gallery\index.xml                                                                       
\server\gallery\page\1\index.html                                                               
\server\images\gohugo-default-sample-hero-image.jpg                                             
\server\images\title-icon.png                                                                   
\server\images\gallery\art1.jpg                                                                 
\server\images\gallery\art2.jpg                                                                 
\server\posts\index.html                                                                        
\server\posts\index.xml                                                                         
\server\posts\page\1\index.html                                                                 
\server\posts\page-1\index.html                                                                 
\server\tags\index.html                                                                         
\server\tags\index.xml                                                                          
\static\CNAME                                                                                   
\static\icon.png                                                                                
\static\images\home-icon (2).jpg                                                                
\static\images\home-icon (2).png                                                                
\static\images\home-icon.jpg                                                                    
\static\images\ophelia.png                                                                      
\static\images\ophelia.png~                                                                     
\static\images\title-icon.png                                                                   
\static\images\trees.png                                                                        
\static\images\banners\foodcatsbanner.jpg                                                       
\static\images\banners\gallerybanner.jpg                                                        
\static\images\banners\samuraismokeybanner.png                                                  
\static\images\banners\skullkittenbanner.jpg                                                    
\static\images\ch1\01.png                                                                       
\static\images\ch1\02.png                                                                       
\static\images\ch1\03.png                                                                       
\static\images\ch1\04.png                                                                       
\static\images\ch1\05.png                                                                       
\static\images\ch1\06.png                                                                       
\static\images\ch1\07.png                                                                       
\static\images\ch1\08.png                                                                       
\static\images\ch1\09.png                                                                       
\static\images\ch1\10.png                                                                       
\static\images\ch1\11.png                                                                       
\static\images\ch1\12.png                                                                       
\static\images\ch1\13.png                                                                       
\static\images\ch1\14.png                                                                       
\static\images\ch1\15.png                                                                       
\static\images\ch1\16.png                                                                       
\static\images\ch1\17.png                                                                       
\static\images\ch1\18.png                                                                       
\static\images\ch1\19.png                                                                       
\static\images\ch1\20.png                                                                       
\static\images\ch1\21.png                                                                       
\static\images\ch1\22.png                                                                       
\static\images\ch1\23.png                                                                       
\static\images\ch1\24.png                                                                       
\static\images\ch1\25.png                                                                       
\static\images\ch1\26.png                                                                       
\static\images\ch1\27.png                                                                       
\static\images\ch1\28.png                                                                       
\static\images\ch1\29.png                                                                       
\static\images\ch1\30.png                                                                       
\static\images\ch1\31.png                                                                       
\static\images\ch1\32.png                                                                       
\static\images\ch1\33.png                                                                       
\static\images\ch1\34.png                                                                       
\static\images\ch1\35.png                                                                       
\static\images\ch1\36.png                                                                       
\static\images\ch1\37.png                                                                       
\static\images\ch1\38.png                                                                       
\static\images\ch1\39.png                                                                       
\static\images\ch1\40.png                                                                       
\static\images\ch1\41.png                                                                       
\static\images\ch1\42.png                                                                       
\static\images\ch1\43.png                                                                       
\static\images\ch1\44.png                                                                       
\static\images\ch1\45.png                                                                       
\static\images\ch1\46.png                                                                       
\static\images\ch1\47.png                                                                       
\static\images\ch1\48.png                                                                       
\static\images\ch1\49.png                                                                       
\static\images\ch1\50.png                                                                       
\static\images\ch1\51.png                                                                       
\static\images\ch2\01.png                                                                       
\static\images\ch2\02.png                                                                       
\static\images\ch2\03.png                                                                       
\static\images\ch2\04.png                                                                       
\static\images\ch2\05.png                                                                       
\static\images\ch2\06.png                                                                       
\static\images\ch2\07.png                                                                       
\static\images\ch2\08.png                                                                       
\static\images\ch2\09.png                                                                       
\static\images\ch2\10.png                                                                       
\static\images\ch2\11.png                                                                       
\static\images\ch2\12.png                                                                       
\static\images\ch2\13.png                                                                       
\static\images\ch2\14.png                                                                       
\static\images\ch2\15.png                                                                       
\static\images\ch2\16.png                                                                       
\static\images\ch2\17.png                                                                       
\static\images\ch2\18.png                                                                       
\static\images\ch2\19.png                                                                       
\static\images\ch2\20.png                                                                       
\static\images\ch2\21.png                                                                       
\static\images\ch2\22.png                                                                       
\static\images\ch2\23.png                                                                       
\static\images\ch2\24.png                                                                       
\static\images\ch2\25.png                                                                       
\static\images\ch2\26.png                                                                       
\static\images\ch2\27.png                                                                       
\static\images\ch2\28.png                                                                       
\static\images\ch2\29.png                                                                       
\static\images\ch2\30.png                                                                       
\static\images\ch2\31.png                                                                       
\static\images\ch2\32.png                                                                       
\static\images\ch2\33.png                                                                       
\static\images\ch2\34.png                                                                       
\static\images\ch2\35.png                                                                       
\static\images\ch2\36.png                                                                       
\static\images\ch2\37.png                                                                       
\static\images\ch2\38.png                                                                       
\static\images\ch2\39.png                                                                       
\static\images\ch2\40.png                                                                       
\static\images\ch2\41.png                                                                       
\static\images\ch2\42.png                                                                       
\static\images\ch2\43.png                                                                       
\static\images\ch2\44.png                                                                       
\static\images\ch2\45.png                                                                       
\static\images\ch2\46.png                                                                       
\static\images\ch2\47.png                                                                       
\static\images\ch2\48.png                                                                       
\static\images\ch2\49.png                                                                       
\static\images\ch2\50.png                                                                       
\static\images\ch2\51.png                                                                       
\static\images\ch2\52.png                                                                       
\static\images\ch2\53.png                                                                       
\static\images\ch2\54.png                                                                       
\static\images\ch2\55.png                                                                       
\static\images\ch2\56.png                                                                       
\static\images\ch2\57.png                                                                       
\static\images\ch2\58.png                                                                       
\static\images\ch2\59.png                                                                       
\static\images\ch2\60.png                                                                       
\static\images\ch3\01.png                                                                       
\static\images\ch3\02.png                                                                       
\static\images\ch3\03.png                                                                       
\static\images\ch3\04.png                                                                       
\static\images\ch3\05.png                                                                       
\static\images\ch3\06.png                                                                       
\static\images\ch3\07.png                                                                       
\static\images\ch3\08.png                                                                       
\static\images\ch3\09.png                                                                       
\static\images\ch3\10.png                                                                       
\static\images\ch3\11.png                                                                       
\static\images\ch3\12.png                                                                       
\static\images\ch3\13.png                                                                       
\static\images\ch3\14.png                                                                       
\static\images\ch3\15.png                                                                       
\static\images\ch3\16.png                                                                       
\static\images\ch3\17.png                                                                       
\static\images\ch3\18.png                                                                       
\static\images\ch3\19.png                                                                       
\static\images\ch3\20.png                                                                       
\static\images\ch3\21.png                                                                       
\static\images\ch3\22.png                                                                       
\static\images\ch3\23.png                                                                       
\static\images\ch3\24.png                                                                       
\static\images\ch3\25.png                                                                       
\static\images\ch3\26.png                                                                       
\static\images\ch3\27.png                                                                       
\static\images\ch3\28.png                                                                       
\static\images\ch3\29.png                                                                       
\static\images\ch3\30.png                                                                       
\static\images\ch3\31.png                                                                       
\static\images\ch3\32.png                                                                       
\static\images\ch3\33.png                                                                       
\static\images\ch3\34.png                                                                       
\static\images\ch3\35.png                                                                       
\static\images\ch3\36.png                                                                       
\static\images\ch3\37.png                                                                       
\static\images\ch3\38.png                                                                       
\static\images\ch3\39.png                                                                       
\static\images\ch3\40.png                                                                       
\static\images\ch3\41.png                                                                       
\static\images\ch3\42.png                                                                       
\static\images\ch3\43.png                                                                       
\static\images\ch3\44.png                                                                       
\static\images\ch3\45.png                                                                       
\static\images\ch3\46.png                                                                       
\static\images\ch3\47.png                                                                       
\static\images\ch3\48.png                                                                       
\static\images\ch3\49.png                                                                       
\static\images\ch3\50.png                                                                       
\static\images\ch3\51.png                                                                       
\static\images\ch3\52.png                                                                       
\static\images\ch3\53.png                                                                       
\static\images\ch3\54.png                                                                       
\static\images\ch3\55.png                                                                       
\static\images\ch3\56.png                                                                       
\static\images\ch3\57.png                                                                       
\static\images\ch3\58.png                                                                       
\static\images\ch3\59.png                                                                       
\static\images\ch3\60.png                                                                       
\static\images\comicsicon\1.png                                                                 
\static\images\comicsicon\2.png                                                                 
\static\images\comicsicon\3.png                                                                 
\static\images\comicsicon\72v.gif                                                               
\static\images\comicsicon\babu.png                                                              
\static\images\comicsicon\breach.png                                                            
\static\images\comicsicon\catnip.png                                                            
\static\images\comicsicon\comms.jpg                                                             
\static\images\comicsicon\cookiecat.png                                                         
\static\images\comicsicon\database.jpg                                                          
\static\images\comicsicon\defender.png                                                          
\static\images\comicsicon\fc.jpg                                                                
\static\images\comicsicon\feedcats.png                                                          
\static\images\comicsicon\gallery.jpg                                                           
\static\images\comicsicon\kiki.png                                                              
\static\images\comicsicon\liz.png                                                               
\static\images\comicsicon\miyagi.png                                                            
\static\images\comicsicon\moonbuggy.png                                                         
\static\images\comicsicon\neongrid.png                                                          
\static\images\comicsicon\neonrush.png                                                          
\static\images\comicsicon\play.jpg                                                              
\static\images\comicsicon\sk.jpg                                                                
\static\images\comicsicon\skull.png                                                             
\static\images\comicsicon\smokey.png                                                            
\static\images\comicsicon\ss.png                                                                
\static\images\foodcats\1.jpg                                                                   
\static\images\foodcats\10.jpg                                                                  
\static\images\foodcats\11.jpg                                                                  
\static\images\foodcats\12.jpg                                                                  
\static\images\foodcats\13.jpg                                                                  
\static\images\foodcats\2.jpg                                                                   
\static\images\foodcats\3.jpg                                                                   
\static\images\foodcats\4.jpg                                                                   
\static\images\foodcats\5.jpg                                                                   
\static\images\foodcats\6.jpg                                                                   
\static\images\foodcats\7.jpg                                                                   
\static\images\foodcats\8.jpg                                                                   
\static\images\foodcats\9.jpg                                                                   
\static\images\foodcats\banner.jpg                                                              
\static\images\foodcats\ch1\page1.jpg                                                           
\static\images\foodcats\ch1\page2.jpg                                                           
\static\images\foodcats\ch10\page1.jpg                                                          
\static\images\foodcats\ch11\page1.jpg                                                          
\static\images\foodcats\ch11\page2.jpg                                                          
\static\images\foodcats\ch12\page1.jpg                                                          
\static\images\foodcats\ch12\page2.jpg                                                          
\static\images\foodcats\ch13\page1.jpg                                                          
\static\images\foodcats\ch13\page2.jpg                                                          
\static\images\foodcats\ch2\page1.jpg                                                           
\static\images\foodcats\ch2\page2.jpg                                                           
\static\images\foodcats\ch3\page1.jpg                                                           
\static\images\foodcats\ch4\page1.jpg                                                           
\static\images\foodcats\ch4\page2.jpg                                                           
\static\images\foodcats\ch5\page1.jpg                                                           
\static\images\foodcats\ch5\page2.jpg                                                           
\static\images\foodcats\ch6\page1.jpg                                                           
\static\images\foodcats\ch7\page1.jpg                                                           
\static\images\foodcats\ch7\page2.jpg                                                           
\static\images\foodcats\ch8\page1.jpg                                                           
\static\images\foodcats\ch8\page2.jpg                                                           
\static\images\foodcats\ch9\page1.jpg                                                           
\static\images\gallery\art1.jpg                                                                 
\static\images\gallery\art10.jpg                                                                
\static\images\gallery\art11.jpg                                                                
\static\images\gallery\art12.jpg                                                                
\static\images\gallery\art12.png                                                                
\static\images\gallery\art13.jpg                                                                
\static\images\gallery\art14.jpg                                                                
\static\images\gallery\art15.jpg                                                                
\static\images\gallery\art16.jpg                                                                
\static\images\gallery\art17.jpg                                                                
\static\images\gallery\art2.jpg                                                                 
\static\images\gallery\art3.png                                                                 
\static\images\gallery\art4.jpg                                                                 
\static\images\gallery\art5.png                                                                 
\static\images\gallery\art6.jpg                                                                 
\static\images\gallery\art7.jpg                                                                 
\static\images\gallery\art8.jpg                                                                 
\static\images\gallery\art9.jpg                                                                 
\static\images\gallery\DahliaSticker.png                                                        
\static\images\gallery\commissions\1.jpg                                                        
\static\images\gallery\commissions\10.jpg                                                       
\static\images\gallery\commissions\11.jpg                                                       
\static\images\gallery\commissions\12.jpg                                                       
\static\images\gallery\commissions\13.jpg                                                       
\static\images\gallery\commissions\14.jpg                                                       
\static\images\gallery\commissions\15.jpg                                                       
\static\images\gallery\commissions\2.jpg                                                        
\static\images\gallery\commissions\3.jpg                                                        
\static\images\gallery\commissions\4.jpg                                                        
\static\images\gallery\commissions\5.jpg                                                        
\static\images\gallery\commissions\6.jpg                                                        
\static\images\gallery\commissions\7.jpg                                                        
\static\images\gallery\commissions\8.jpg                                                        
\static\images\gallery\commissions\9.jpg                                                        
\static\images\gallery\foodcats\banner.jpg                                                      
\static\images\gallery\nova\1.jpg                                                               
\static\images\gallery\nova\2.jpg                                                               
\static\images\gallery\nova\3.jpg                                                               
\static\images\gallery\nova\4.png                                                               
\static\images\gallery\nova\5.png                                                               
\static\images\gallery\nova\6.jpg                                                               
\static\images\gallery\personalart\p1.jpg                                                       
\static\images\gallery\skullkitten\skullkittenbanner.jpg                                        
\static\js\breach.js                                                                            
\static\js\defender.js                                                                          
\static\js\fishclicker.js                                                                       
\static\js\gallery.js                                                                           
\static\js\main.js                                                                              
\static\js\moon-buggy.js                                                                        
\static\js\neongrid.js                                                                          
\static\js\neonrush.js                                                                          
\static\js\theme-switcher.js                                                                    
\themes\ananke\.coderabbit.yaml                                                                 
\themes\ananke\.gitignore                                                                       
\themes\ananke\.markdownlint.jsonc                                                              
\themes\ananke\.markdownlintignore                                                              
\themes\ananke\.nvmrc                                                                           
\themes\ananke\.versionrc.cjs                                                                   
\themes\ananke\CHANGELOG.md                                                                     
\themes\ananke\CONTRIBUTING.md                                                                  
\themes\ananke\go.mod                                                                           
\themes\ananke\LICENSE.md                                                                       
\themes\ananke\netlify.toml                                                                     
\themes\ananke\package-lock.json                                                                
\themes\ananke\package.json                                                                     
\themes\ananke\README.md                                                                        
\themes\ananke\theme.toml                                                                       
\themes\ananke\.frontmatter\database\taxonomyDb.json                                            
\themes\ananke\.github\changelog-old.md                                                         
\themes\ananke\.github\CODEOWNERS                                                               
\themes\ananke\.github\dependabot.yml                                                           
\themes\ananke\.github\pull_request_template.md                                                 
\themes\ananke\.github\ISSUE_TEMPLATE\bugs.md                                                   
\themes\ananke\.github\ISSUE_TEMPLATE\config.yml                                                
\themes\ananke\.github\scripts\posterboy.mjs                                                    
\themes\ananke\.vscode\extensions.json                                                          
\themes\ananke\.vscode\settings.json                                                            
\themes\ananke\archetypes\default.md                                                            
\themes\ananke\assets\ananke\css\_code.css                                                      
\themes\ananke\assets\ananke\css\_hugo-internal-templates.css                                   
\themes\ananke\assets\ananke\css\_social-icons.css                                              
\themes\ananke\assets\ananke\css\_styles.css                                                    
\themes\ananke\assets\ananke\css\_tachyons.css                                                  
\themes\ananke\assets\ananke\dist\main.css_5c99d70a7725bacd4c701e995b969fea.css                 
\themes\ananke\assets\ananke\socials\42-group.svg                                               
\themes\ananke\assets\ananke\socials\500px.svg                                                  
\themes\ananke\assets\ananke\socials\accessible-icon.svg                                        
\themes\ananke\assets\ananke\socials\accusoft.svg                                               
\themes\ananke\assets\ananke\socials\adn.svg                                                    
\themes\ananke\assets\ananke\socials\adversal.svg                                               
\themes\ananke\assets\ananke\socials\affiliatetheme.svg                                         
\themes\ananke\assets\ananke\socials\airbnb.svg                                                 
\themes\ananke\assets\ananke\socials\algolia.svg                                                
\themes\ananke\assets\ananke\socials\alipay.svg                                                 
\themes\ananke\assets\ananke\socials\amazon-pay.svg                                             
\themes\ananke\assets\ananke\socials\amazon.svg                                                 
\themes\ananke\assets\ananke\socials\amilia.svg                                                 
\themes\ananke\assets\ananke\socials\android.svg                                                
\themes\ananke\assets\ananke\socials\angellist.svg                                              
\themes\ananke\assets\ananke\socials\angrycreative.svg                                          
\themes\ananke\assets\ananke\socials\angular.svg                                                
\themes\ananke\assets\ananke\socials\app-store-ios.svg                                          
\themes\ananke\assets\ananke\socials\app-store.svg                                              
\themes\ananke\assets\ananke\socials\apper.svg                                                  
\themes\ananke\assets\ananke\socials\apple-pay.svg                                              
\themes\ananke\assets\ananke\socials\apple.svg                                                  
\themes\ananke\assets\ananke\socials\artstation.svg                                             
\themes\ananke\assets\ananke\socials\asymmetrik.svg                                             
\themes\ananke\assets\ananke\socials\atlassian.svg                                              
\themes\ananke\assets\ananke\socials\audible.svg                                                
\themes\ananke\assets\ananke\socials\autoprefixer.svg                                           
\themes\ananke\assets\ananke\socials\avianex.svg                                                
\themes\ananke\assets\ananke\socials\aviato.svg                                                 
\themes\ananke\assets\ananke\socials\aws.svg                                                    
\themes\ananke\assets\ananke\socials\bandcamp.svg                                               
\themes\ananke\assets\ananke\socials\battle-net.svg                                             
\themes\ananke\assets\ananke\socials\behance.svg                                                
\themes\ananke\assets\ananke\socials\bilibili.svg                                               
\themes\ananke\assets\ananke\socials\bimobject.svg                                              
\themes\ananke\assets\ananke\socials\bitbucket.svg                                              
\themes\ananke\assets\ananke\socials\bitcoin.svg                                                
\themes\ananke\assets\ananke\socials\bity.svg                                                   
\themes\ananke\assets\ananke\socials\black-tie.svg                                              
\themes\ananke\assets\ananke\socials\blackberry.svg                                             
\themes\ananke\assets\ananke\socials\blogger-b.svg                                              
\themes\ananke\assets\ananke\socials\blogger.svg                                                
\themes\ananke\assets\ananke\socials\bluesky.svg                                                
\themes\ananke\assets\ananke\socials\bluetooth-b.svg                                            
\themes\ananke\assets\ananke\socials\bluetooth.svg                                              
\themes\ananke\assets\ananke\socials\bootstrap.svg                                              
\themes\ananke\assets\ananke\socials\bots.svg                                                   
\themes\ananke\assets\ananke\socials\brave-reverse.svg                                          
\themes\ananke\assets\ananke\socials\brave.svg                                                  
\themes\ananke\assets\ananke\socials\btc.svg                                                    
\themes\ananke\assets\ananke\socials\buffer.svg                                                 
\themes\ananke\assets\ananke\socials\buromobelexperte.svg                                       
\themes\ananke\assets\ananke\socials\buy-n-large.svg                                            
\themes\ananke\assets\ananke\socials\buysellads.svg                                             
\themes\ananke\assets\ananke\socials\canadian-maple-leaf.svg                                    
\themes\ananke\assets\ananke\socials\cc-amazon-pay.svg                                          
\themes\ananke\assets\ananke\socials\cc-amex.svg                                                
\themes\ananke\assets\ananke\socials\cc-apple-pay.svg                                           
\themes\ananke\assets\ananke\socials\cc-diners-club.svg                                         
\themes\ananke\assets\ananke\socials\cc-discover.svg                                            
\themes\ananke\assets\ananke\socials\cc-jcb.svg                                                 
\themes\ananke\assets\ananke\socials\cc-mastercard.svg                                          
\themes\ananke\assets\ananke\socials\cc-paypal.svg                                              
\themes\ananke\assets\ananke\socials\cc-stripe.svg                                              
\themes\ananke\assets\ananke\socials\cc-visa.svg                                                
\themes\ananke\assets\ananke\socials\centercode.svg                                             
\themes\ananke\assets\ananke\socials\centos.svg                                                 
\themes\ananke\assets\ananke\socials\chrome.svg                                                 
\themes\ananke\assets\ananke\socials\chromecast.svg                                             
\themes\ananke\assets\ananke\socials\cloudflare.svg                                             
\themes\ananke\assets\ananke\socials\cloudscale.svg                                             
\themes\ananke\assets\ananke\socials\cloudsmith.svg                                             
\themes\ananke\assets\ananke\socials\cloudversify.svg                                           
\themes\ananke\assets\ananke\socials\cmplid.svg                                                 
\themes\ananke\assets\ananke\socials\codepen.svg                                                
\themes\ananke\assets\ananke\socials\codiepie.svg                                               
\themes\ananke\assets\ananke\socials\confluence.svg                                             
\themes\ananke\assets\ananke\socials\connectdevelop.svg                                         
\themes\ananke\assets\ananke\socials\contao.svg                                                 
\themes\ananke\assets\ananke\socials\cotton-bureau.svg                                          
\themes\ananke\assets\ananke\socials\cpanel.svg                                                 
\themes\ananke\assets\ananke\socials\creative-commons-by.svg                                    
\themes\ananke\assets\ananke\socials\creative-commons-nc-eu.svg                                 
\themes\ananke\assets\ananke\socials\creative-commons-nc-jp.svg                                 
\themes\ananke\assets\ananke\socials\creative-commons-nc.svg                                    
\themes\ananke\assets\ananke\socials\creative-commons-nd.svg                                    
\themes\ananke\assets\ananke\socials\creative-commons-pd-alt.svg                                
\themes\ananke\assets\ananke\socials\creative-commons-pd.svg                                    
\themes\ananke\assets\ananke\socials\creative-commons-remix.svg                                 
\themes\ananke\assets\ananke\socials\creative-commons-sa.svg                                    
\themes\ananke\assets\ananke\socials\creative-commons-sampling-plus.svg                         
\themes\ananke\assets\ananke\socials\creative-commons-sampling.svg                              
\themes\ananke\assets\ananke\socials\creative-commons-share.svg                                 
\themes\ananke\assets\ananke\socials\creative-commons-zero.svg                                  
\themes\ananke\assets\ananke\socials\creative-commons.svg                                       
\themes\ananke\assets\ananke\socials\critical-role.svg                                          
\themes\ananke\assets\ananke\socials\css3-alt.svg                                               
\themes\ananke\assets\ananke\socials\css3.svg                                                   
\themes\ananke\assets\ananke\socials\cuttlefish.svg                                             
\themes\ananke\assets\ananke\socials\d-and-d-beyond.svg                                         
\themes\ananke\assets\ananke\socials\d-and-d.svg                                                
\themes\ananke\assets\ananke\socials\dailymotion.svg                                            
\themes\ananke\assets\ananke\socials\dart-lang.svg                                              
\themes\ananke\assets\ananke\socials\dashcube.svg                                               
\themes\ananke\assets\ananke\socials\debian.svg                                                 
\themes\ananke\assets\ananke\socials\deezer.svg                                                 
\themes\ananke\assets\ananke\socials\delicious.svg                                              
\themes\ananke\assets\ananke\socials\deploydog.svg                                              
\themes\ananke\assets\ananke\socials\deskpro.svg                                                
\themes\ananke\assets\ananke\socials\dev.svg                                                    
\themes\ananke\assets\ananke\socials\deviantart.svg                                             
\themes\ananke\assets\ananke\socials\dhl.svg                                                    
\themes\ananke\assets\ananke\socials\diaspora.svg                                               
\themes\ananke\assets\ananke\socials\digg.svg                                                   
\themes\ananke\assets\ananke\socials\digital-ocean.svg                                          
\themes\ananke\assets\ananke\socials\discord.svg                                                
\themes\ananke\assets\ananke\socials\discourse.svg                                              
\themes\ananke\assets\ananke\socials\dochub.svg                                                 
\themes\ananke\assets\ananke\socials\docker.svg                                                 
\themes\ananke\assets\ananke\socials\draft2digital.svg                                          
\themes\ananke\assets\ananke\socials\dribbble.svg                                               
\themes\ananke\assets\ananke\socials\dropbox.svg                                                
\themes\ananke\assets\ananke\socials\drupal.svg                                                 
\themes\ananke\assets\ananke\socials\dyalog.svg                                                 
\themes\ananke\assets\ananke\socials\earlybirds.svg                                             
\themes\ananke\assets\ananke\socials\ebay.svg                                                   
\themes\ananke\assets\ananke\socials\edge-legacy.svg                                            
\themes\ananke\assets\ananke\socials\edge.svg                                                   
\themes\ananke\assets\ananke\socials\elementor.svg                                              
\themes\ananke\assets\ananke\socials\ello.svg                                                   
\themes\ananke\assets\ananke\socials\ember.svg                                                  
\themes\ananke\assets\ananke\socials\empire.svg                                                 
\themes\ananke\assets\ananke\socials\envelope.svg                                               
\themes\ananke\assets\ananke\socials\envira.svg                                                 
\themes\ananke\assets\ananke\socials\erlang.svg                                                 
\themes\ananke\assets\ananke\socials\ethereum.svg                                               
\themes\ananke\assets\ananke\socials\etsy.svg                                                   
\themes\ananke\assets\ananke\socials\evernote.svg                                               
\themes\ananke\assets\ananke\socials\expeditedssl.svg                                           
\themes\ananke\assets\ananke\socials\facebook-f.svg                                             
\themes\ananke\assets\ananke\socials\facebook-messenger.svg                                     
\themes\ananke\assets\ananke\socials\facebook.svg                                               
\themes\ananke\assets\ananke\socials\fantasy-flight-games.svg                                   
\themes\ananke\assets\ananke\socials\fedex.svg                                                  
\themes\ananke\assets\ananke\socials\fedora.svg                                                 
\themes\ananke\assets\ananke\socials\figma.svg                                                  
\themes\ananke\assets\ananke\socials\firefox-browser.svg                                        
\themes\ananke\assets\ananke\socials\firefox.svg                                                
\themes\ananke\assets\ananke\socials\first-order-alt.svg                                        
\themes\ananke\assets\ananke\socials\first-order.svg                                            
\themes\ananke\assets\ananke\socials\firstdraft.svg                                             
\themes\ananke\assets\ananke\socials\flickr.svg                                                 
\themes\ananke\assets\ananke\socials\flipboard.svg                                              
\themes\ananke\assets\ananke\socials\flutter.svg                                                
\themes\ananke\assets\ananke\socials\fly.svg                                                    
\themes\ananke\assets\ananke\socials\font-awesome.svg                                           
\themes\ananke\assets\ananke\socials\fonticons-fi.svg                                           
\themes\ananke\assets\ananke\socials\fonticons.svg                                              
\themes\ananke\assets\ananke\socials\fort-awesome-alt.svg                                       
\themes\ananke\assets\ananke\socials\fort-awesome.svg                                           
\themes\ananke\assets\ananke\socials\forumbee.svg                                               
\themes\ananke\assets\ananke\socials\foursquare.svg                                             
\themes\ananke\assets\ananke\socials\free-code-camp.svg                                         
\themes\ananke\assets\ananke\socials\freebsd.svg                                                
\themes\ananke\assets\ananke\socials\fulcrum.svg                                                
\themes\ananke\assets\ananke\socials\galactic-republic.svg                                      
\themes\ananke\assets\ananke\socials\galactic-senate.svg                                        
\themes\ananke\assets\ananke\socials\get-pocket.svg                                             
\themes\ananke\assets\ananke\socials\gg-circle.svg                                              
\themes\ananke\assets\ananke\socials\gg.svg                                                     
\themes\ananke\assets\ananke\socials\git-alt.svg                                                
\themes\ananke\assets\ananke\socials\git.svg                                                    
\themes\ananke\assets\ananke\socials\github-alt.svg                                             
\themes\ananke\assets\ananke\socials\github.svg                                                 
\themes\ananke\assets\ananke\socials\gitkraken.svg                                              
\themes\ananke\assets\ananke\socials\gitlab.svg                                                 
\themes\ananke\assets\ananke\socials\gitter.svg                                                 
\themes\ananke\assets\ananke\socials\glide-g.svg                                                
\themes\ananke\assets\ananke\socials\glide.svg                                                  
\themes\ananke\assets\ananke\socials\gofore.svg                                                 
\themes\ananke\assets\ananke\socials\golang.svg                                                 
\themes\ananke\assets\ananke\socials\goodreads-g.svg                                            
\themes\ananke\assets\ananke\socials\goodreads.svg                                              
\themes\ananke\assets\ananke\socials\google-drive.svg                                           
\themes\ananke\assets\ananke\socials\google-pay.svg                                             
\themes\ananke\assets\ananke\socials\google-play.svg                                            
\themes\ananke\assets\ananke\socials\google-plus-g.svg                                          
\themes\ananke\assets\ananke\socials\google-plus.svg                                            
\themes\ananke\assets\ananke\socials\google-scholar.svg                                         
\themes\ananke\assets\ananke\socials\google-wallet.svg                                          
\themes\ananke\assets\ananke\socials\google.svg                                                 
\themes\ananke\assets\ananke\socials\gratipay.svg                                               
\themes\ananke\assets\ananke\socials\grav.svg                                                   
\themes\ananke\assets\ananke\socials\gripfire.svg                                               
\themes\ananke\assets\ananke\socials\grunt.svg                                                  
\themes\ananke\assets\ananke\socials\guilded.svg                                                
\themes\ananke\assets\ananke\socials\gulp.svg                                                   
\themes\ananke\assets\ananke\socials\hacker-news.svg                                            
\themes\ananke\assets\ananke\socials\hackerrank.svg                                             
\themes\ananke\assets\ananke\socials\hashnode.svg                                               
\themes\ananke\assets\ananke\socials\hips.svg                                                   
\themes\ananke\assets\ananke\socials\hire-a-helper.svg                                          
\themes\ananke\assets\ananke\socials\hive.svg                                                   
\themes\ananke\assets\ananke\socials\hooli.svg                                                  
\themes\ananke\assets\ananke\socials\hornbill.svg                                               
\themes\ananke\assets\ananke\socials\hotjar.svg                                                 
\themes\ananke\assets\ananke\socials\houzz.svg                                                  
\themes\ananke\assets\ananke\socials\html5.svg                                                  
\themes\ananke\assets\ananke\socials\hubspot.svg                                                
\themes\ananke\assets\ananke\socials\ideal.svg                                                  
\themes\ananke\assets\ananke\socials\imdb.svg                                                   
\themes\ananke\assets\ananke\socials\instagram.svg                                              
\themes\ananke\assets\ananke\socials\instalod.svg                                               
\themes\ananke\assets\ananke\socials\intercom.svg                                               
\themes\ananke\assets\ananke\socials\internet-explorer.svg                                      
\themes\ananke\assets\ananke\socials\invision.svg                                               
\themes\ananke\assets\ananke\socials\ioxhost.svg                                                
\themes\ananke\assets\ananke\socials\itch-io.svg                                                
\themes\ananke\assets\ananke\socials\itunes-note.svg                                            
\themes\ananke\assets\ananke\socials\itunes.svg                                                 
\themes\ananke\assets\ananke\socials\java.svg                                                   
\themes\ananke\assets\ananke\socials\jedi-order.svg                                             
\themes\ananke\assets\ananke\socials\jenkins.svg                                                
\themes\ananke\assets\ananke\socials\jira.svg                                                   
\themes\ananke\assets\ananke\socials\joget.svg                                                  
\themes\ananke\assets\ananke\socials\joomla.svg                                                 
\themes\ananke\assets\ananke\socials\js.svg                                                     
\themes\ananke\assets\ananke\socials\jsfiddle.svg                                               
\themes\ananke\assets\ananke\socials\jxl.svg                                                    
\themes\ananke\assets\ananke\socials\kaggle.svg                                                 
\themes\ananke\assets\ananke\socials\keybase.svg                                                
\themes\ananke\assets\ananke\socials\keycdn.svg                                                 
\themes\ananke\assets\ananke\socials\kickstarter-k.svg                                          
\themes\ananke\assets\ananke\socials\kickstarter.svg                                            
\themes\ananke\assets\ananke\socials\korvue.svg                                                 
\themes\ananke\assets\ananke\socials\laravel.svg                                                
\themes\ananke\assets\ananke\socials\lastfm.svg                                                 
\themes\ananke\assets\ananke\socials\leanpub.svg                                                
\themes\ananke\assets\ananke\socials\less.svg                                                   
\themes\ananke\assets\ananke\socials\letterboxd.svg                                             
\themes\ananke\assets\ananke\socials\LICENSE.txt                                                
\themes\ananke\assets\ananke\socials\line.svg                                                   
\themes\ananke\assets\ananke\socials\linkedin-in.svg                                            
\themes\ananke\assets\ananke\socials\linkedin.svg                                               
\themes\ananke\assets\ananke\socials\linode.svg                                                 
\themes\ananke\assets\ananke\socials\linux.svg                                                  
\themes\ananke\assets\ananke\socials\lyft.svg                                                   
\themes\ananke\assets\ananke\socials\magento.svg                                                
\themes\ananke\assets\ananke\socials\mailchimp.svg                                              
\themes\ananke\assets\ananke\socials\mandalorian.svg                                            
\themes\ananke\assets\ananke\socials\markdown.svg                                               
\themes\ananke\assets\ananke\socials\mastodon.svg                                               
\themes\ananke\assets\ananke\socials\maxcdn.svg                                                 
\themes\ananke\assets\ananke\socials\mdb.svg                                                    
\themes\ananke\assets\ananke\socials\medapps.svg                                                
\themes\ananke\assets\ananke\socials\medium.svg                                                 
\themes\ananke\assets\ananke\socials\medrt.svg                                                  
\themes\ananke\assets\ananke\socials\meetup.svg                                                 
\themes\ananke\assets\ananke\socials\megaport.svg                                               
\themes\ananke\assets\ananke\socials\mendeley.svg                                               
\themes\ananke\assets\ananke\socials\meta.svg                                                   
\themes\ananke\assets\ananke\socials\microblog.svg                                              
\themes\ananke\assets\ananke\socials\microsoft.svg                                              
\themes\ananke\assets\ananke\socials\mintbit.svg                                                
\themes\ananke\assets\ananke\socials\mix.svg                                                    
\themes\ananke\assets\ananke\socials\mixcloud.svg                                               
\themes\ananke\assets\ananke\socials\mixer.svg                                                  
\themes\ananke\assets\ananke\socials\mizuni.svg                                                 
\themes\ananke\assets\ananke\socials\modx.svg                                                   
\themes\ananke\assets\ananke\socials\monero.svg                                                 
\themes\ananke\assets\ananke\socials\napster.svg                                                
\themes\ananke\assets\ananke\socials\neos.svg                                                   
\themes\ananke\assets\ananke\socials\nfc-directional.svg                                        
\themes\ananke\assets\ananke\socials\nfc-symbol.svg                                             
\themes\ananke\assets\ananke\socials\nimblr.svg                                                 
\themes\ananke\assets\ananke\socials\node-js.svg                                                
\themes\ananke\assets\ananke\socials\node.svg                                                   
\themes\ananke\assets\ananke\socials\npm.svg                                                    
\themes\ananke\assets\ananke\socials\ns8.svg                                                    
\themes\ananke\assets\ananke\socials\nutritionix.svg                                            
\themes\ananke\assets\ananke\socials\octopus-deploy.svg                                         
\themes\ananke\assets\ananke\socials\odnoklassniki.svg                                          
\themes\ananke\assets\ananke\socials\odysee.svg                                                 
\themes\ananke\assets\ananke\socials\old-republic.svg                                           
\themes\ananke\assets\ananke\socials\opencart.svg                                               
\themes\ananke\assets\ananke\socials\openid.svg                                                 
\themes\ananke\assets\ananke\socials\opensuse.svg                                               
\themes\ananke\assets\ananke\socials\opera.svg                                                  
\themes\ananke\assets\ananke\socials\optin-monster.svg                                          
\themes\ananke\assets\ananke\socials\orcid.svg                                                  
\themes\ananke\assets\ananke\socials\osi.svg                                                    
\themes\ananke\assets\ananke\socials\padlet.svg                                                 
\themes\ananke\assets\ananke\socials\page4.svg                                                  
\themes\ananke\assets\ananke\socials\pagelines.svg                                              
\themes\ananke\assets\ananke\socials\palfed.svg                                                 
\themes\ananke\assets\ananke\socials\patreon.svg                                                
\themes\ananke\assets\ananke\socials\paypal.svg                                                 
\themes\ananke\assets\ananke\socials\perbyte.svg                                                
\themes\ananke\assets\ananke\socials\periscope.svg                                              
\themes\ananke\assets\ananke\socials\phabricator.svg                                            
\themes\ananke\assets\ananke\socials\phoenix-framework.svg                                      
\themes\ananke\assets\ananke\socials\phoenix-squadron.svg                                       
\themes\ananke\assets\ananke\socials\php.svg                                                    
\themes\ananke\assets\ananke\socials\pied-piper-alt.svg                                         
\themes\ananke\assets\ananke\socials\pied-piper-hat.svg                                         
\themes\ananke\assets\ananke\socials\pied-piper-pp.svg                                          
\themes\ananke\assets\ananke\socials\pied-piper.svg                                             
\themes\ananke\assets\ananke\socials\pinterest-p.svg                                            
\themes\ananke\assets\ananke\socials\pinterest.svg                                              
\themes\ananke\assets\ananke\socials\pix.svg                                                    
\themes\ananke\assets\ananke\socials\pixiv.svg                                                  
\themes\ananke\assets\ananke\socials\playstation.svg                                            
\themes\ananke\assets\ananke\socials\product-hunt.svg                                           
\themes\ananke\assets\ananke\socials\pushed.svg                                                 
\themes\ananke\assets\ananke\socials\python.svg                                                 
\themes\ananke\assets\ananke\socials\qq.svg                                                     
\themes\ananke\assets\ananke\socials\quinscape.svg                                              
\themes\ananke\assets\ananke\socials\quora.svg                                                  
\themes\ananke\assets\ananke\socials\r-project.svg                                              
\themes\ananke\assets\ananke\socials\raspberry-pi.svg                                           
\themes\ananke\assets\ananke\socials\ravelry.svg                                                
\themes\ananke\assets\ananke\socials\react.svg                                                  
\themes\ananke\assets\ananke\socials\reacteurope.svg                                            
\themes\ananke\assets\ananke\socials\readme.svg                                                 
\themes\ananke\assets\ananke\socials\rebel.svg                                                  
\themes\ananke\assets\ananke\socials\red-river.svg                                              
\themes\ananke\assets\ananke\socials\reddit-alien.svg                                           
\themes\ananke\assets\ananke\socials\reddit.svg                                                 
\themes\ananke\assets\ananke\socials\redhat.svg                                                 
\themes\ananke\assets\ananke\socials\renren.svg                                                 
\themes\ananke\assets\ananke\socials\replyd.svg                                                 
\themes\ananke\assets\ananke\socials\researchgate.svg                                           
\themes\ananke\assets\ananke\socials\resolving.svg                                              
\themes\ananke\assets\ananke\socials\rev.svg                                                    
\themes\ananke\assets\ananke\socials\rocketchat.svg                                             
\themes\ananke\assets\ananke\socials\rockrms.svg                                                
\themes\ananke\assets\ananke\socials\rss.svg                                                    
\themes\ananke\assets\ananke\socials\rust.svg                                                   
\themes\ananke\assets\ananke\socials\safari.svg                                                 
\themes\ananke\assets\ananke\socials\salesforce.svg                                             
\themes\ananke\assets\ananke\socials\sass.svg                                                   
\themes\ananke\assets\ananke\socials\schlix.svg                                                 
\themes\ananke\assets\ananke\socials\screenpal.svg                                              
\themes\ananke\assets\ananke\socials\scribd.svg                                                 
\themes\ananke\assets\ananke\socials\searchengin.svg                                            
\themes\ananke\assets\ananke\socials\sellcast.svg                                               
\themes\ananke\assets\ananke\socials\sellsy.svg                                                 
\themes\ananke\assets\ananke\socials\servicestack.svg                                           
\themes\ananke\assets\ananke\socials\shirtsinbulk.svg                                           
\themes\ananke\assets\ananke\socials\shoelace.svg                                               
\themes\ananke\assets\ananke\socials\shopify.svg                                                
\themes\ananke\assets\ananke\socials\shopware.svg                                               
\themes\ananke\assets\ananke\socials\signal-messenger.svg                                       
\themes\ananke\assets\ananke\socials\simplybuilt.svg                                            
\themes\ananke\assets\ananke\socials\sistrix.svg                                                
\themes\ananke\assets\ananke\socials\sith.svg                                                   
\themes\ananke\assets\ananke\socials\sitrox.svg                                                 
\themes\ananke\assets\ananke\socials\sketch.svg                                                 
\themes\ananke\assets\ananke\socials\skyatlas.svg                                               
\themes\ananke\assets\ananke\socials\skype.svg                                                  
\themes\ananke\assets\ananke\socials\slack.svg                                                  
\themes\ananke\assets\ananke\socials\slideshare.svg                                             
\themes\ananke\assets\ananke\socials\snapchat.svg                                               
\themes\ananke\assets\ananke\socials\soundcloud.svg                                             
\themes\ananke\assets\ananke\socials\sourcetree.svg                                             
\themes\ananke\assets\ananke\socials\space-awesome.svg                                          
\themes\ananke\assets\ananke\socials\speakap.svg                                                
\themes\ananke\assets\ananke\socials\speaker-deck.svg                                           
\themes\ananke\assets\ananke\socials\spotify.svg                                                
\themes\ananke\assets\ananke\socials\square-behance.svg                                         
\themes\ananke\assets\ananke\socials\square-dribbble.svg                                        
\themes\ananke\assets\ananke\socials\square-facebook.svg                                        
\themes\ananke\assets\ananke\socials\square-font-awesome-stroke.svg                             
\themes\ananke\assets\ananke\socials\square-font-awesome.svg                                    
\themes\ananke\assets\ananke\socials\square-git.svg                                             
\themes\ananke\assets\ananke\socials\square-github.svg                                          
\themes\ananke\assets\ananke\socials\square-gitlab.svg                                          
\themes\ananke\assets\ananke\socials\square-google-plus.svg                                     
\themes\ananke\assets\ananke\socials\square-hacker-news.svg                                     
\themes\ananke\assets\ananke\socials\square-instagram.svg                                       
\themes\ananke\assets\ananke\socials\square-js.svg                                              
\themes\ananke\assets\ananke\socials\square-lastfm.svg                                          
\themes\ananke\assets\ananke\socials\square-letterboxd.svg                                      
\themes\ananke\assets\ananke\socials\square-odnoklassniki.svg                                   
\themes\ananke\assets\ananke\socials\square-pied-piper.svg                                      
\themes\ananke\assets\ananke\socials\square-pinterest.svg                                       
\themes\ananke\assets\ananke\socials\square-reddit.svg                                          
\themes\ananke\assets\ananke\socials\square-snapchat.svg                                        
\themes\ananke\assets\ananke\socials\square-steam.svg                                           
\themes\ananke\assets\ananke\socials\square-threads.svg                                         
\themes\ananke\assets\ananke\socials\square-tumblr.svg                                          
\themes\ananke\assets\ananke\socials\square-twitter.svg                                         
\themes\ananke\assets\ananke\socials\square-upwork.svg                                          
\themes\ananke\assets\ananke\socials\square-viadeo.svg                                          
\themes\ananke\assets\ananke\socials\square-vimeo.svg                                           
\themes\ananke\assets\ananke\socials\square-web-awesome-stroke.svg                              
\themes\ananke\assets\ananke\socials\square-web-awesome.svg                                     
\themes\ananke\assets\ananke\socials\square-whatsapp.svg                                        
\themes\ananke\assets\ananke\socials\square-x-twitter.svg                                       
\themes\ananke\assets\ananke\socials\square-xing.svg                                            
\themes\ananke\assets\ananke\socials\square-youtube.svg                                         
\themes\ananke\assets\ananke\socials\squarespace.svg                                            
\themes\ananke\assets\ananke\socials\stack-exchange.svg                                         
\themes\ananke\assets\ananke\socials\stack-overflow.svg                                         
\themes\ananke\assets\ananke\socials\stackpath.svg                                              
\themes\ananke\assets\ananke\socials\staylinked.svg                                             
\themes\ananke\assets\ananke\socials\steam-symbol.svg                                           
\themes\ananke\assets\ananke\socials\steam.svg                                                  
\themes\ananke\assets\ananke\socials\sticker-mule.svg                                           
\themes\ananke\assets\ananke\socials\strava.svg                                                 
\themes\ananke\assets\ananke\socials\stripe-s.svg                                               
\themes\ananke\assets\ananke\socials\stripe.svg                                                 
\themes\ananke\assets\ananke\socials\stubber.svg                                                
\themes\ananke\assets\ananke\socials\studiovinari.svg                                           
\themes\ananke\assets\ananke\socials\stumbleupon-circle.svg                                     
\themes\ananke\assets\ananke\socials\stumbleupon.svg                                            
\themes\ananke\assets\ananke\socials\superpowers.svg                                            
\themes\ananke\assets\ananke\socials\supple.svg                                                 
\themes\ananke\assets\ananke\socials\suse.svg                                                   
\themes\ananke\assets\ananke\socials\swift.svg                                                  
\themes\ananke\assets\ananke\socials\symfony.svg                                                
\themes\ananke\assets\ananke\socials\teamspeak.svg                                              
\themes\ananke\assets\ananke\socials\telegram.svg                                               
\themes\ananke\assets\ananke\socials\tencent-weibo.svg                                          
\themes\ananke\assets\ananke\socials\the-red-yeti.svg                                           
\themes\ananke\assets\ananke\socials\themeco.svg                                                
\themes\ananke\assets\ananke\socials\themeisle.svg                                              
\themes\ananke\assets\ananke\socials\think-peaks.svg                                            
\themes\ananke\assets\ananke\socials\threads.svg                                                
\themes\ananke\assets\ananke\socials\tiktok.svg                                                 
\themes\ananke\assets\ananke\socials\trade-federation.svg                                       
\themes\ananke\assets\ananke\socials\trello.svg                                                 
\themes\ananke\assets\ananke\socials\tumblr.svg                                                 
\themes\ananke\assets\ananke\socials\twitch.svg                                                 
\themes\ananke\assets\ananke\socials\twitter.svg                                                
\themes\ananke\assets\ananke\socials\typo3.svg                                                  
\themes\ananke\assets\ananke\socials\uber.svg                                                   
\themes\ananke\assets\ananke\socials\ubuntu.svg                                                 
\themes\ananke\assets\ananke\socials\uikit.svg                                                  
\themes\ananke\assets\ananke\socials\umbraco.svg                                                
\themes\ananke\assets\ananke\socials\uncharted.svg                                              
\themes\ananke\assets\ananke\socials\uniregistry.svg                                            
\themes\ananke\assets\ananke\socials\unity.svg                                                  
\themes\ananke\assets\ananke\socials\unsplash.svg                                               
\themes\ananke\assets\ananke\socials\untappd.svg                                                
\themes\ananke\assets\ananke\socials\ups.svg                                                    
\themes\ananke\assets\ananke\socials\upwork.svg                                                 
\themes\ananke\assets\ananke\socials\usb.svg                                                    
\themes\ananke\assets\ananke\socials\usps.svg                                                   
\themes\ananke\assets\ananke\socials\ussunnah.svg                                               
\themes\ananke\assets\ananke\socials\vaadin.svg                                                 
\themes\ananke\assets\ananke\socials\viacoin.svg                                                
\themes\ananke\assets\ananke\socials\viadeo.svg                                                 
\themes\ananke\assets\ananke\socials\viber.svg                                                  
\themes\ananke\assets\ananke\socials\vimeo-v.svg                                                
\themes\ananke\assets\ananke\socials\vimeo.svg                                                  
\themes\ananke\assets\ananke\socials\vine.svg                                                   
\themes\ananke\assets\ananke\socials\vk.svg                                                     
\themes\ananke\assets\ananke\socials\vnv.svg                                                    
\themes\ananke\assets\ananke\socials\vuejs.svg                                                  
\themes\ananke\assets\ananke\socials\watchman-monitoring.svg                                    
\themes\ananke\assets\ananke\socials\waze.svg                                                   
\themes\ananke\assets\ananke\socials\web-awesome.svg                                            
\themes\ananke\assets\ananke\socials\webflow.svg                                                
\themes\ananke\assets\ananke\socials\weebly.svg                                                 
\themes\ananke\assets\ananke\socials\weibo.svg                                                  
\themes\ananke\assets\ananke\socials\weixin.svg                                                 
\themes\ananke\assets\ananke\socials\whatsapp.svg                                               
\themes\ananke\assets\ananke\socials\whmcs.svg                                                  
\themes\ananke\assets\ananke\socials\wikipedia-w.svg                                            
\themes\ananke\assets\ananke\socials\windows.svg                                                
\themes\ananke\assets\ananke\socials\wirsindhandwerk.svg                                        
\themes\ananke\assets\ananke\socials\wix.svg                                                    
\themes\ananke\assets\ananke\socials\wizards-of-the-coast.svg                                   
\themes\ananke\assets\ananke\socials\wodu.svg                                                   
\themes\ananke\assets\ananke\socials\wolf-pack-battalion.svg                                    
\themes\ananke\assets\ananke\socials\wordpress-simple.svg                                       
\themes\ananke\assets\ananke\socials\wordpress.svg                                              
\themes\ananke\assets\ananke\socials\wpbeginner.svg                                             
\themes\ananke\assets\ananke\socials\wpexplorer.svg                                             
\themes\ananke\assets\ananke\socials\wpforms.svg                                                
\themes\ananke\assets\ananke\socials\wpressr.svg                                                
\themes\ananke\assets\ananke\socials\x-twitter.svg                                              
\themes\ananke\assets\ananke\socials\xbox.svg                                                   
\themes\ananke\assets\ananke\socials\xing.svg                                                   
\themes\ananke\assets\ananke\socials\y-combinator.svg                                           
\themes\ananke\assets\ananke\socials\yahoo.svg                                                  
\themes\ananke\assets\ananke\socials\yammer.svg                                                 
\themes\ananke\assets\ananke\socials\yandex-international.svg                                   
\themes\ananke\assets\ananke\socials\yandex.svg                                                 
\themes\ananke\assets\ananke\socials\yarn.svg                                                   
\themes\ananke\assets\ananke\socials\yelp.svg                                                   
\themes\ananke\assets\ananke\socials\yoast.svg                                                  
\themes\ananke\assets\ananke\socials\youtube.svg                                                
\themes\ananke\assets\ananke\socials\zhihu.svg                                                  
\themes\ananke\config\_default\hugo.toml                                                        
\themes\ananke\config\_default\module.toml                                                      
\themes\ananke\config\_default\params.toml                                                      
\themes\ananke\docs\getting-started.md                                                          
\themes\ananke\docs\troubleshooting.md                                                          
\themes\ananke\docs\_index.md                                                                   
\themes\ananke\docs\configuration\general.md                                                    
\themes\ananke\docs\configuration\seo.md                                                        
\themes\ananke\docs\configuration\social-media-networks.md                                      
\themes\ananke\docs\configuration\_index.md                                                     
\themes\ananke\docs\content\frontmatter.md                                                      
\themes\ananke\docs\content\general.md                                                          
\themes\ananke\docs\content\reading-time.md                                                     
\themes\ananke\docs\content\shortcodes.md                                                       
\themes\ananke\docs\content\_index.md                                                           
\themes\ananke\docs\customisation\colours.md                                                    
\themes\ananke\docs\customisation\comments.md                                                   
\themes\ananke\docs\customisation\hero-section.md                                               
\themes\ananke\docs\customisation\styles.md                                                     
\themes\ananke\docs\customisation\_index.md                                                     
\themes\ananke\docs\installation\git-submodule.md                                               
\themes\ananke\docs\installation\gohugo-module.md                                               
\themes\ananke\docs\installation\installation.md                                                
\themes\ananke\docs\installation\_index.md                                                      
\themes\ananke\i18n\bg.toml                                                                     
\themes\ananke\i18n\ca.toml                                                                     
\themes\ananke\i18n\cs.toml                                                                     
\themes\ananke\i18n\cy.toml                                                                     
\themes\ananke\i18n\de.toml                                                                     
\themes\ananke\i18n\en.toml                                                                     
\themes\ananke\i18n\es.toml                                                                     
\themes\ananke\i18n\fi.toml                                                                     
\themes\ananke\i18n\fr.toml                                                                     
\themes\ananke\i18n\he.toml                                                                     
\themes\ananke\i18n\hi.toml                                                                     
\themes\ananke\i18n\hu.toml                                                                     
\themes\ananke\i18n\id.toml                                                                     
\themes\ananke\i18n\it.toml                                                                     
\themes\ananke\i18n\ja.toml                                                                     
\themes\ananke\i18n\nl.toml                                                                     
\themes\ananke\i18n\no.toml                                                                     
\themes\ananke\i18n\oc.toml                                                                     
\themes\ananke\i18n\pl.toml                                                                     
\themes\ananke\i18n\pt.toml                                                                     
\themes\ananke\i18n\ru.toml                                                                     
\themes\ananke\i18n\sv.toml                                                                     
\themes\ananke\i18n\tr.toml                                                                     
\themes\ananke\i18n\uk.toml                                                                     
\themes\ananke\i18n\zh-tw.toml                                                                  
\themes\ananke\i18n\zh.toml                                                                     
\themes\ananke\images\screenshot.png                                                            
\themes\ananke\images\tn.png                                                                    
\themes\ananke\layouts\404.html                                                                 
\themes\ananke\layouts\baseof.html                                                              
\themes\ananke\layouts\home.html                                                                
\themes\ananke\layouts\list.html                                                                
\themes\ananke\layouts\robots.txt                                                               
\themes\ananke\layouts\single.html                                                              
\themes\ananke\layouts\summary-with-image.html                                                  
\themes\ananke\layouts\summary.html                                                             
\themes\ananke\layouts\taxonomy.html                                                            
\themes\ananke\layouts\terms.html                                                               
\themes\ananke\layouts\page\single.html                                                         
\themes\ananke\layouts\post\list.html                                                           
\themes\ananke\layouts\post\summary.html                                                        
\themes\ananke\layouts\_partials\author.html                                                    
\themes\ananke\layouts\_partials\commento.html                                                  
\themes\ananke\layouts\_partials\head-additions.html                                            
\themes\ananke\layouts\_partials\i18nlist.html                                                  
\themes\ananke\layouts\_partials\menu-contextual.html                                           
\themes\ananke\layouts\_partials\new-window-icon.html                                           
\themes\ananke\layouts\_partials\page-header.html                                               
\themes\ananke\layouts\_partials\site-favicon.html                                              
\themes\ananke\layouts\_partials\site-footer.html                                               
\themes\ananke\layouts\_partials\site-header.html                                               
\themes\ananke\layouts\_partials\site-navigation.html                                           
\themes\ananke\layouts\_partials\site-scripts.html                                              
\themes\ananke\layouts\_partials\site-style.html                                                
\themes\ananke\layouts\_partials\summary-with-image.html                                        
\themes\ananke\layouts\_partials\summary.html                                                   
\themes\ananke\layouts\_partials\tags.html                                                      
\themes\ananke\layouts\_partials\func\GetFeaturedImage.html                                     
\themes\ananke\layouts\_partials\func\warn.html                                                 
\themes\ananke\layouts\_partials\func\social\getShareLink.html                                  
\themes\ananke\layouts\_partials\func\style\GetMainCSS.html                                     
\themes\ananke\layouts\_partials\func\style\GetResource.html                                    
\themes\ananke\layouts\_partials\social\follow.html                                             
\themes\ananke\layouts\_partials\social\share.html                                              
\themes\ananke\layouts\_partials\svg\new-window.svg                                             
\themes\ananke\layouts\_partials\svg\tiktok.svg                                                 
\themes\ananke\layouts\_shortcodes\form-contact.html                                            
\themes\ananke\site\.gitignore                                                                  
\themes\ananke\site\frontmatter.json                                                            
\themes\ananke\site\go.mod                                                                      
\themes\ananke\site\go.sum                                                                      
\themes\ananke\site\README.md                                                                   
\themes\ananke\site\.frontmatter\database\pinnedItemsDb.json                                    
\themes\ananke\site\.frontmatter\database\taxonomyDb.json                                       
\themes\ananke\site\assets\ananke\css\fixes.css                                                 
\themes\ananke\site\assets\ananke\css\highlighting.css                                          
\themes\ananke\site\config\_default\hugo.toml                                                   
\themes\ananke\site\config\_default\params.toml                                                 
\themes\ananke\site\layouts\_shortcodes\page-index.html                                         
\themes\ananke\site\partials\site-scripts.html                                                  
\themes\ananke\site\static\assets\styles.css                                                    
\themes\ananke\static\images\gohugo-default-sample-hero-image.jpg                               


2. GLOBAL CONTENT SECURITY POLICY (CSP)

This tag controls frame parameters across layout renders. Any automated modifications must append new parameters to these target domains to prevent analytics or message terminal disconnects:

### baseof.html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https://github.com https://*.githubusercontent.com https://giscus.app https://*.cbox.ws; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://giscus.app https://*.cbox.ws; script-src 'self' 'unsafe-inline' https://gc.zgo.at https://cdnjs.cloudflare.com https://giscus.app https://*.cbox.ws; frame-src 'self' https://giscus.app https://*.cbox.ws; connect-src 'self' https://galileocat.goatcounter.com https://giscus.app https://api.github.com https://*.cbox.ws; object-src 'none'; base-uri 'self'; upgrade-insecure-requests;">    

3. STATIC ASSET VARIABLES

    Frictionless Chat Box: https://www3.cbox.ws/box/?boxid=3555243&boxtag=8KGelo

    Layout Seal Stamp: /images/title-icon.png (Enforce structural sizes with !important height attributes during canvas width transformations).


4. UI ARCHITECTURE PRINCIPLES

    Frictionless Chat Controls: The community message engine runs inside layout containers conditioned exclusively by front-matter configuration queries (enable_chat: true).

    Visual Theme Categorization: UI pathways are split structurally by aesthetic types (Roster Layouts, Ambient Frameworks, Print Vintage Mixes).

    Mobile Breakpoint Constraints: Grid layouts utilize fluid scaling tokens (repeat(auto-fit, minmax(340px, 1fr))) to handle phone breakpoints adaptively without viewport horizontal clipping.

5. DYNAMIC INTERACTIVE THEME ENGINE

The website features an interactive theme engine managed via local JavaScript (/static/js/theme-switcher.js) and rendered using custom Hugo layout templates. Themes are split into markdown asset tokens and paired layout components.
A. Theme Inventory & Target Manifest

Each markdown file inside content/themes/ acts as a unique data model containing the specific visual configurations for that theme:

    smokey.md: Default high-contrast neon/dark grit terminal aesthetic.

    ophelia.md: Special customized character theme utilizing specialized asset arrays (/static/images/ophelia.png).

    shinobi.md: Sleek, minimal stealth-oriented backdrop array.

    bubble.md & popit.md: Vibrant, hyper-stylized Y2K interactive aesthetics.

    flower.md & sonic.md: Nostalgic, bright retro tribute frameworks.

    ps-theme.md: Console-emulation overlay interface matching vintage gaming structures.

## B. Structural Layout Routing

Theme components use targeted template files to render picker buttons, grids, and visual overrides:

    layouts/_default/theme-picker.html: Generates the grid panels, interactive selector frames, and preview cards for the UI.

    layouts/_default/theme-layout.html: Governs the structural color rules, backdrop switches, and canvas wrapper frames required when a new theme state updates.

    layouts/themes/list.html: Generates the master landing index page displaying all active selection vectors.

## C. Variable Overrides Strategy

When writing script modifications or style updates for the theme switcher, always target the document root body properties via state tracking classes:
JavaScript

// Example structural anchor for /static/js/theme-switcher.js
function applyTheme(themeName) {
    document.body.className = 'theme-active-' + themeName;
    localStorage.setItem('selected-site-theme', themeName);
}

Ensure that any background switches or typography variables (--theme-accent, --theme-bg) scale harmoniously with the master hardware properties without clashing against your Content Security Policy restrictions.