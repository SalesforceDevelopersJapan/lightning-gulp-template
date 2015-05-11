#Lightning Component Gulp Template
This is a template for building Lightning Component that avoid confuse version for 3rd party scripts.

##Based on lightning-template-coffeescript
This component is based on Stomita's [lightning-template-coffeescript](https://github.com/stomita/lightning-template-coffeescript). If you familiar with coffeescript, please check it.


##How to use


### basic install
you need install **git**,**node.js**, **npm** & **gulp** before use this.


```
git clone https://github.com/SalesforceDevelopersJapan/lightning-gulp-template
cd lightning-gulp-template
npm install
bower install
SF_USERNAME=yourSalesforceUsername SF_PASSWORD=yourSalesforcePassword gulp
```


### Use your original component name
If you want to use your original component name, please change HereIsYourComponentName variable and folder/file name.

For example, if you want to create component  **"Ryusei"**, please change following points:

> **[Folder & File]**
>
./pkg/aura/HereIsYourComponentName/HereIsYourComponentName.cmp
 -> ./pkg/aura/Ryusei/Ryusei.cmp
>
./pkg/aura/HereIsYourComponentName/HereIsYourComponentNameController.js
 -> ./pkg/aura/Ryusei/RyuseiController.js
>
./pkg/aura/HereIsYourComponentName/HereIsYourComponentName.css
 -> ./pkg/aura/Ryusei/Ryusei.css
>
./pkg/staticresources/HereIsYourComponentName.resource-meta.xml
 -> ./pkg/staticresources/Ryusei.resource-meta.xml
>
./src/scripts/HereIsYourComponentName.js
-> ./src/scripts/Ryusei.js
>
> **[in gulpfile.js]**
>
var componentName = 'HereIsYourComponentName'; -> var componentName = 'Ryusei';
>
**[in pkg/package.xml (2 places)]**
>
&lt;members&gt;HereIsYourComponentName&lt;/members&gt;
-> &lt;members&gt;Ryusei&lt;/members&gt;


### In development
If you want to use auto deploy when files are changed,please type following command:

```
SF_USERNAME=yourSalesforceUsername SF_PASSWORD=yourSalesforcePassword gulp watch
```
