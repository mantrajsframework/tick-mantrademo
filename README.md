# tick Mantra demo app

This simple Mantra app defines a component to manage a job once a second.

To install the application run the following command inside the application folder:

```bash
$ mantrad install
```

Then, to start the application, run:

```bash
$ mantrad startapp tickapp
```

Because there's only one app defined, you can start it also with:

```bash
$ mantrad startapp
```

The application defines a cron job to be run every second. The configuration of this time is defines as a property in the controller of the tick component at /components/controllers/cron.tick.js.

# More about Mantra Framework
Read official documentation at [Mantra site](https://www.mantrajs.com).

Download demos at [Mantra site demos](https://www.mantrajs.com/mantrademos/showall) and learn by example.

Download common Mantra components at [Mantra site components](https://www.mantrajs.com/marketplacecomponent/components).