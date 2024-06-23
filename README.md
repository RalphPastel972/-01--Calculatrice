# [01] Calculatrice

I still have a lot to do before reaching a V1:

* Using last number as starting point when using an operator AFTER a result was returned
* Make it possible to use the keyboard
* Make it possible to edit former expressions
* Prevent user from entering multiple successive operators
* Prevent users from pressing equal button when the expression is incomplete
* Give the user visual clue of the issue they're facing
* Add a light/Dark feature

One major issur I can't find a solution for is the following:

* Find a way to get rid of ‘eval()’ because it's too dangerous (see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!))
