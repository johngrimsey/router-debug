# Router debug

      npm start

Please check the app's routing setup.


### Expected behaviour:
Clicking 'Open modal' should open dialog and it should contain the text "Holy hell it works" (from `ModalFeatureComponent`)

### Actual behaviour:

Modal opens, with the shell component `ModalLayoutComponent`, but the child outlet isn't rendering `ModalFeatureComponent`
even though the child outlet is activated correctly.

