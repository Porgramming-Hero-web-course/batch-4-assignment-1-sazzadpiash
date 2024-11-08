{
    function getProperty<S, P extends keyof S>(object: S, value: P): S[P] {
        return object[value];
    }

}