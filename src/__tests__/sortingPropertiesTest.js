import orderByProps from "../sortingProperties";

test.each ([
    [{name: 'всадник', health: 35, defence: 61, attack: 44, level: 8}, ["name", "level"], [{key: "name", value: "всадник"}, {key: "level", value: 8}, {key: "attack", value: 44}, {key: "defence", value: 61}, {key: "health", value: 35}]],
    [{name: 'маг', health: 70, defence: 99, attack: 96, level: 16}, ["health", "defence"], [{key: "health", value: 70}, {key: "defence", value: 99}, {key: "attack", value: 96}, {key: "level", value: 16}, {key: "name", value: 'маг'}]],
    [{name: 'маг', health: 70, defence: 99, attack: 96, level: 16}, ["attack", "name"], [{key: "attack", value: 96}, {key: "name", value: 'маг'}, {key: "defence", value: 99}, {key: "health", value: 70}, {key: "level", value: 16}]]
])("Testing the order in massive", (obj, sortOrder, expected) => {
    const recieved = orderByProps(obj, sortOrder);
    expect(recieved).toEqual(expected);
});