module.exports = [
    [{ puzzle: '568913724342687519197...3866854...3121953...77341628959263451784738916528517.6943' },
        '568913724342687519197254386685479231219538467734162895926345178473891652851726943'
    ],

    [
        { "error": "Required field missing" }
    ],

    [{ puzzle: '5..KLS2.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3' },

    { error: 'Invalid characters in puzzle' }
    ],

    [
        { puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23.' },

        { error: 'Expected puzzle to be 81 characters long' }
    ],

    [
        { puzzle: '..5..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..' },

        { "error": "Puzzle cannot be solved" }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 2 },

        { "valid": true }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 4 },

        { "valid": false, "conflict": ["region"] }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 7 },

        { "valid": false, "conflict": ["row", "region"] }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 5 },

        { "valid": false, "conflict": ["row", "column", "region"] }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2" },

        { "error": "Required field(s) missing" }
    ],

    [
        { puzzle: '..839.7.575.KJH.964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 2 },

        { error: 'Invalid characters in puzzle' }
    ],

    [
        { puzzle: '..839.7.575..964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 2 },

        { error: 'Expected puzzle to be 81 characters long' }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "AGG2", value: 2 },

        { "error": "Invalid coordinate" }
    ],

    [
        { puzzle: '..839.7.575.....964..1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1', coordinate: "A2", value: 10 },

        { "error": "Invalid value" }
    ]

]


