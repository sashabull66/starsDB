
export const Compose = (...fns) => (component) => {
    return fns.reduceRight((comp, currentFN) => currentFN(comp), component)
}