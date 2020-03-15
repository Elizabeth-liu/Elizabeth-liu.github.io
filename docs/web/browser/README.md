# 浏览器

重绘不一定导致回流，回流一定会导致重绘。

尽量减少dom操作。上古时代使用creatDocumentFragment等，现代使用vitual-dom等，都达到了这个目的。
