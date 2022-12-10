const messages = {
    required: label => `${label} اجباری است`,
    min: (label, value) => `${label} باید حداقل ${value} کاراکار باشد`,
    max: (label, value) => `${label} باید حداکثر ${value} کاراکار باشد`,
}

export default messages