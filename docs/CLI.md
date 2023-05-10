# Angular Command Line Interface (CLI) Journal

> Angular Developer V14

## 3 - Routes

```bash
# create a home component
ng g c home
# create a about component
ng g c about
# create a lazy module for contact
ng g m contact --routing
# with its component
ng g c contact

# create a lazy module for activities
ng g m activities --route=activities -m=app
# create an inner route for activities/new
ng g m activities/activity-new --route=new -m=activities
# create a parametric route for activities/:slug
ng g m activities/activity-detail --route=:slug -m=activities
```
