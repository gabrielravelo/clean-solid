(() => {

    interface Bird {
        eat(): void;
    }

    interface FlyinBird {
        fly(): void;
    }

    interface RunningBird {
        run(): void;
    }

    interface SwimmerBird {
        swim(): void;
    }

    class Tucan implements Bird, FlyinBird {
        public fly():void {}
        public eat():void {}
    }

    class Humminbird implements Bird, FlyinBird {
        public fly():void {}
        public eat():void {}
    }

    class Ostrich implements Bird, RunningBird {
        public eat():void {}
        public run():void {}
    }

    class Penguing implements Bird, SwimmerBird {
        public eat():void {}
        public swim():void {}
    }

})();