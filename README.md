# Audiofile Core

Audiofile Core Framework. Notes on the Object Oriented Design of the Audiofile Framework

## Classes

### AFNote

#### Description

A note is the core primitive in the AudioFile Framework. All higher level
abstractions (ex: interval, chord) are built with cooperating collections of
notes. 

#### Properties

* `int pitch`
* `int octave`
* `string duration`
* `string key`
* `float readonly frequency`
* `string readonly title`

#### Methods

##### constructor

###### return type

`AFNote`

###### parameters

1. `float frequency`
2. `string title`
3. `int octave`

##### sound

##### silence

##### psuedo code

    var CNote = new Note({
      pitch : 1,
      octave: 4,
      duration: eighth,
      key : 0
    });
