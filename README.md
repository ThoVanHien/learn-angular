# Lesson01 https://github.com/gopinav/Angular-Tutorials

## Property binding (actually binding to the DOM)
- DOM - property : can
- HTML- attributes : not
- Attributes initialize DOM properties and then they are done. Attributes cannot change once they are initialized
- Property can change
- HTML attribute value specifies the initial value and the DOM value property is the current value.
- Property binding : [id] = "variable can boolean" || bind-disabled="variable can boolean" || value = "{{Interpolation}}"
- Have a problem with boolean attribute: cannot use interpolation that can use 2 two ways remains

## Class binding 
- Can not use both property and attribute(angular 5) but now is working both
- Class binding conditional : [class.class-name-css] = "variable can boolean" 
- Multi class : [ngClass] = "variable obj"
- Obj {"key":value is boolean variable}

## Style binding
- Style binding conditional: [style.properties-of-style]="'adj'" || "variable ? 'adj1' : 'adj2'" || "variabled"
- Multi style: [ngStyle]="obj" // obj={property of style : 'adj'}

## Event binding (Class ---data biding--> Template ---event binding-->Class)
- (event)="func()"
- (event)="variabled = 'value is string'" || "assgin = value"

## Template Reference Variables
- Assgin variable name with # on a element : this variable is instance of this element
- Use on parameter for event binding...

## Two way binding(Class(public a,public b) ---data biding--> Template(input a, input b) ---event binding-->Class(public a,public b))
- Sync/consistent class and template
- [(ngModel)]="variable"
- Remind import FormModule in import's modules.ts

## Structural Directives
-Add or remove HTML elements from the DOM
+ ngIf
  *ngIf = "truthy variabled, else templateRefVar" || "falsy variabled; else #templateRefVar" else block use ng-template
  *ngIf = "truthy variabled, then templateRefVar1; else templateRefVar1" noited that this way apply for ng-template
	
+ ngSwitch
  [ngSwitch] = 'variabled' 
	*ngSwitchCase="'value'"
	*ngSwitchDefaulut
+ ngFor
  *ngFor="let x of y; index as i; first as f; last as l; odd as o' even as e" and use {{Interpolation}} to render x 

## Component interaction (childComponent ---data @Output---> parentComponent ---data @Input---> childComponent)
- Send data from the parent to the child: 
  + step1: declare a property(variable)
  + step2: in template of parent declare selector's child component
  + step3: binding it to the child selector .Ex: [parentDataFromVariableOfChild]='variable of parent'
  + step4: in child declare property with @input('parentDataFromVariableOfChild') public variable of parent || alias decorator
  + step5: use it with binding property
- Send data from the child to the parent:
  * The way-1
    + step1: in child component declare instance of the event; Ex: @Ouput() public childEvent = new EventEmitter()
    + step2: in template child create event binding to emit event output; Ex: this.child.emit('value')
    + step3: in template of parent declare event of selector child to variabled of parent pick it up; Ex: (childEven)="message=$paramOfChild"
  * The way-2
    + step1: in parent component @ViewChild(name-child-component) child;
    + step2: implement ViewChild is ngAfterViewInit()

## Pipes: Format ONLY VIEW 

## Service
-Principles:
 + DRY(Do not repear yourself)
 + Single responsibility principle
-Service:
 + A class with a specific purpose
   1.Share data across multiple components 
   2.Implement application logic
   3.External Interaction
-Naming convention -.service.ts

## Dependency Injection
- DI as a design pattern
- DI as a framework that angular provides
   1.Define the EmployeeService class
   2.Register with Injector
   3.Declare as dependency in EmpList and EmpDetail 
- Code without DI - drawbacks
## Using a Service
- Hierarchical DI in Angular : register at app module level
- Step by step
  + step1: declare name service in providers of app.modules 
  + step2: import HttpClientModule in import of app.modules 
  + step3: DI HttpClient on constructor of -.service.ts
  + step4: this.http.get<I same data return[]>(this.url) //cast json to ts type
  + step5: DI service and then this._service.func().subscribe(data=>variable = data) 

## Routing and Navigation
- Step by step
  + step1: add base tag have href='/'
  + step2: app-routing: add path and components, should import all components and export them of it. This best practice
  + step3: <router-outlet></> where component will render below.
  + step4: config routerLlink for a,button tag
- path,redirecTo,pathMatch: full|prefix
	  
https://github.com/gopinav/Angular-Tutorials




